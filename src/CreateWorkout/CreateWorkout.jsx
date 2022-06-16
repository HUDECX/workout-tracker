import React, { useState } from 'react'
import SelectInput from './components/SelectInput';
import "./CreateWorkout.css";
import ExerciseTable from "./components/ExerciseTable";
import { Button } from '@mui/material';
import { SettingsInputComponentSharp } from '@mui/icons-material';

import db from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';



export default function CreateWorkout() {

  const [numberOfTables,setNumberOfTables] = useState(["sample component table"]);    //array of how many tables are created

  const [exerciseData, setExerciseData] = useState([]);
  const [muscleGroup, setMuscleGroup] = useState("");

  function addDataToFirebase(){
    let arr = exerciseData.map(row => {
      return ({
        weight: row.weight,
        id: row.rowId,
        sets: row.numberOfSets,
        reps: row.numberOfReps
      })
    })


    setDoc(doc(db, "workouts", uuidv4()), {
      muscleGroup: muscleGroup,
      exercises: [{
        table: arr
      }]
    })
    console.log(exerciseData);
  }

  function updateExerciseData(data,i){
    setExerciseData(data);
  }

  function updateMuscleGroup(data){
    setMuscleGroup(data)
  }

  function addComponentTable(){
    setNumberOfTables([...numberOfTables,"sample component table"])   // add new table
  };


  return (
    <div className="createWorkout">
        <h1>Create workout</h1>
        <form className='createWorkout__form' action="">
          {/* select the main muscle group of that workout  */}
          <SelectInput updateMuscleGroup={updateMuscleGroup}/>

          {/* map through tables */}
          {numberOfTables.map(table => <ExerciseTable updateWorkout={updateExerciseData}/>)}    

          {/* form footer with buttons  */}
          <div className="formFooter">
            <Button color='success' id='createWorkoutBtn' variant="contained" onClick={addDataToFirebase}>Create workout</Button>
            <Button className='addExerciseBtn' variant="outlined" onClick={addComponentTable}>Add exercise</Button>
          </div>
        </form>
    </div>
  )
}
