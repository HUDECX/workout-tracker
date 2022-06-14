import React, { useState } from 'react'
import SelectInput from './components/SelectInput';
import "./CreateWorkout.css";
import ExerciseTable from "./components/ExerciseTable";
import { Button } from '@mui/material';
import { SettingsInputComponentSharp } from '@mui/icons-material';





export default function CreateWorkout() {

  const [numberOfTables,setNumberOfTables] = useState(["sample component table"]);    //array of how many tables are created

  function addComponentTable(){
    setNumberOfTables([...numberOfTables,"sample component table"])   // add new table
  };


  return (
    <div className="createWorkout">
        <h1>Create workout</h1>
        <form className='createWorkout__form' action="">
          {/* select the main muscle group of that workout  */}
          <SelectInput />

          {/* map through tables */}
          {numberOfTables.map(table => <ExerciseTable />)}    

          {/* form footer with buttons  */}
          <div className="formFooter">
            <Button color='success' type='submit' id='createWorkoutBtn' variant="outlined">Create workout</Button>
            <Button className='addExerciseBtn' variant="outlined" onClick={addComponentTable}>Add exercise</Button>
          </div>
        </form>
    </div>
  )
}
