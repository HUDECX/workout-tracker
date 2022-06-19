import React, { useState } from 'react'
import SelectInput from './components/SelectInput';
import "./CreateWorkout.css";
import ExerciseTable from "./components/ExerciseTable";
import { Button } from '@mui/material';

import db from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';



export default function CreateWorkout() {

  const [numberOfTables,setNumberOfTables] = useState(["sample component table"]);    //array of how many tables are created

  const [exerciseData, setExerciseData] = useState([]);
  const [muscleGroup, setMuscleGroup] = useState("");

  function addDataToFirebase(){   //function for adding data to firebase/firestore
    
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


    setDoc(doc(db, "workouts", uuidv4()), {   // uploads to firestore
      muscleGroup: muscleGroup,
      exercises: modifiedArrayForFirebase
    })
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
  }

  function updateMuscleGroup(data){
    setMuscleGroup(data)
  }

  function addComponentTable(){
    setNumberOfTables([...numberOfTables,"sample component table"])   // add new table - with just sample text that is not meaningful
  };


  return (
    <div className="createWorkout">
        <h1>Create workout</h1>
        <form className='createWorkout__form' action="">
          {/* select the main muscle group of that workout  */}
          <SelectInput updateMuscleGroup={updateMuscleGroup}/>

          {/* map through tables */}
          {numberOfTables.map((table,i) => <ExerciseTable updateWorkout={updateExerciseData} id={i}/>)}    

          {/* form footer with buttons  */}
          <div className="formFooter">
            <Button color='success' id='createWorkoutBtn' variant="contained" onClick={addDataToFirebase}>Create workout</Button>
            <Button className='addExerciseBtn' variant="outlined" onClick={addComponentTable}>Add exercise</Button>
          </div>
        </form>
    </div>
  )
}
