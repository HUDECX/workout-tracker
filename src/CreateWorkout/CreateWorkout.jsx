import React, { useState } from 'react'
import SelectInput from './components/SelectInput';
import "./CreateWorkout.css";
import ExerciseTable from "./components/ExerciseTable";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {TextField} from '@mui/material';

import db from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from "react-router-dom";





export default function CreateWorkout() {

  const [numberOfTables,setNumberOfTables] = useState(["sample component table"]);    //array of how many tables are created

  const [exerciseData, setExerciseData] = useState([]);
  const [muscleGroup, setMuscleGroup] = useState("");
  const [date, setDate] = useState(0);
  const [sessionLength, setSessionLength] = useState(0);

  let navigate = useNavigate();


  function addDataToFirebase(e){   //function for adding data to firebase/firestore

    e.preventDefault();

    
    //first creates a modified(but exact copy) of exerciseData array so it can be uploaded to firebase
    
    let modifiedArrayForFirebase = exerciseData.map(table => {    //loops through raw exercise data
      return ({
        id: table.id,
        name: table.name,
        exercise: table.exercise.map(row => { //here it loops through each row in its exercises table
          return ({
                weight: row.weight,
                id: row.rowId,
                sets: row.numberOfSets,
                reps: row.numberOfReps
              })
        })
      })
    })
    
    async function sendToFirestore(){
      await setDoc(doc(db, "workouts", uuidv4()), {   // uploads to firestore
        muscleGroup: muscleGroup,
        date: date,
        duration: sessionLength,
        exercises: modifiedArrayForFirebase
      })
      navigate("/", {replace: true});
    }

    try {
      sendToFirestore();
    } catch (error) {
      console.log(error);
    }


  }

  function updateExerciseData(data){

    let arr = exerciseData;

    let index = arr.findIndex(table => table.id === data.id);   // searches if the exercise already exists and has an Id

    if(index !== -1){
      arr[index] = data;     //if it exists it just modifies data in that exercise that was updated
    }else{
      arr = [...arr,data];  // if it doesnt have id - it doesnt exist, it creates new exercise in that array
    }

    setExerciseData(arr);
    console.log(exerciseData);
  }

  function updateMuscleGroup(data){
    setMuscleGroup(data)
  }

  function addComponentTable(){
    setNumberOfTables([...numberOfTables,"sample component table"])   // add new table - with just sample text that is not meaningful
  };

  function removeTable(){
    let arr = [...exerciseData];
    let numOfTables = numberOfTables;
    numOfTables.pop();
    let newArr = arr.filter(table => table.id !== numOfTables.length);
    setExerciseData(newArr);
    setNumberOfTables(numOfTables);
  }


  return (
    <div className="createWorkout">
        <h1>Create workout</h1>
        <form className='createWorkout__form' onSubmit={(e) => addDataToFirebase(e)} action="">
          {/* select the main muscle group of that workout  */}
          <SelectInput updateMuscleGroup={updateMuscleGroup}/>

          {/* map through tables */}
          <div className="exerciseTable-container">
            {numberOfTables.map((table,i) => {
              return (
                <div className="exerciseTable">
                  <ExerciseTable updateWorkout={updateExerciseData} id={i}/>
                </div>
              )
            })}
          </div>   
          <div className="tableControl">
            <Button className='addExerciseBtn' variant="outlined" onClick={addComponentTable}><AddCircleIcon />Add exercise</Button>
            {numberOfTables.length > 1 && <Button variant='outlined' className='removeTableBtn' onClick={removeTable}><DeleteIcon /></Button>}
          </div>
          <div className="dateTimeContainer">
            <TextField      //date picker
              required
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              label="Date"
              type="date"
              sx={{ width: 140 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField    //time picker - how long the gym session was
              required
              id="time"
              value={sessionLength}
              onChange={(e) => setSessionLength(e.target.value)}
              label="Length"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
              />
          </div>

          {/* form footer with buttons  */}
          <div className="formFooter">
            <Button color='success' id='createWorkoutBtn' variant="contained" type='submit'>Create workout</Button>
          </div>
        </form>
    </div>
  )
}
