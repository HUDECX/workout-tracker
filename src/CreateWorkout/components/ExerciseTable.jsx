import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'



import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';




class tableRowData{   // table row class
  constructor(rowId,numberOfSets,weight,numberOfReps){
    this.rowId = rowId;
    this.numberOfSets = numberOfSets;
    this.weight = weight;
    this.numberOfReps = numberOfReps;
  }
}





export default function ExerciseTable({updateWorkout,id}) {
  
  const [tableData,setTableData] = useState([
    new tableRowData(0,0,0,0)   // initialize first row, others can be added later
  ]);

  
  const [currentRow,setCurrentRow] = useState(1);
  const [numberOfRows, setNumberOfRows] = useState([0]);
  const [exerciseName,setExerciseName] = useState("");

  useEffect(() => {

    // if the table data / name of that table was updated it sends that update to CreateWorkout.jsx

    let arr = {   
      id: id,
      name: exerciseName,
      exercise: tableData
    }
    updateWorkout(arr);
  },[tableData,exerciseName])
  

  function handleChange(e,type,row){    //after adding a row it sets the value that was changed
    let arr = [...tableData];
    switch (type) {     
      case "set":
        arr[row].numberOfSets = e.target.value;
        break;
      case "weight":
        arr[row].weight = e.target.value;
        break;
      case "rep":
        arr[row].numberOfReps = e.target.value;
        break;
    
      default:
        break;
    }
    setTableData(arr)
  }


  function addRow(i){
    if(i>0) setTableData([...tableData,new tableRowData(i,0,0,0)])    // adds a new row to numberOfRows 


    setNumberOfRows(prev => [...prev,currentRow]);    //adds a new row
    setCurrentRow(prev => +prev+1); // changes to currently added row ID
  }


  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th colSpan={3} scope="col" style={{border:"none"}}><TextField required id="standard-basic" label="Name of exercise" variant="standard" value={exerciseName} onChange={e => setExerciseName(e.target.value)}/></th>
          </tr>
          <tr>
            <th scope="col">Enter number of sets </th>
            <th scope="col">Enter the weight</th>
            <th scope="col">Enter the number of reps</th>
          </tr>
        </thead>
        <tbody>
          {/* loops through how many rows we should have and creates them */}
          {numberOfRows.map(row => 
            <tr>
              <td><TextField className='textField' value={tableData[row].numberOfSets} onChange={(e) => handleChange(e,"set",row)} sx={{maxWidth: 75}} id="standard-basic" label="Sets" variant="filled" type="number" /></td>
              <td><TextField className='textField' value={tableData[row].weight} onChange={(e) => handleChange(e,"weight",row)} sx={{maxWidth: 75}} id="standard-basic" label="Kg" variant="filled" type="number"/></td>
              <td><TextField className='textField' value={tableData[row].numberOfReps} onChange={(e) => handleChange(e,"rep",row)} sx={{maxWidth: 75}} id="standard-basic" label="Rep" variant="filled" type="number"/></td>
            </tr>
            )}
        </tbody>
        <tfoot>
          <th colSpan={3}><Fab color="primary" aria-label="add" onClick={() => addRow(currentRow)}><AddIcon /></Fab></th>
        </tfoot>
      </table>
    </>
    
  )
}
