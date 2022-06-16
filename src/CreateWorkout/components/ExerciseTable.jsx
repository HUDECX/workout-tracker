import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'



import { Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';




class tableRowData{   // table row class
  constructor(rowId,numberOfSets,weight,numberOfReps){
    this.rowId = rowId;
    this.numberOfSets = numberOfSets;
    this.weight = weight;
    this.numberOfReps = numberOfReps;
  }
}





export default function ExerciseTable({updateWorkout}) {
  
  const [tableData,setTableData] = useState([
    new tableRowData(0,0,0,0)   // initialize first row, others can be added later
  ]);
  
  const [currentRow,setCurrentRow] = useState(1);
  const [numberOfRows, setNumberOfRows] = useState([0]);

  useEffect(() => {
    updateWorkout(tableData);
  },[tableData])
  

  function handleChange(e,type,i){    //after adding a row it sets the value that was changed
    let arr = [...tableData];
    switch (type) {     
      case "set":
        arr[i].numberOfSets = e.target.value;
        break;
      case "weight":
        arr[i].weight = e.target.value;
        break;
      case "rep":
        arr[i].numberOfReps = e.target.value;
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
            <th colSpan={3} scope="col" style={{border:"none"}}><TextField id="standard-basic" label="Name of your exercise" variant="standard" /></th>
          </tr>
          <tr>
            <th scope="col">Enter number of sets </th>
            <th scope="col">Enter the weight</th>
            <th scope="col">Enter the number of reps</th>
          </tr>
        </thead>
        <tbody>
          {numberOfRows.map(row => 
            <tr>
              <td style={{border:"none"}}><TextField value={tableData[row].numberOfSets} onChange={(e) => handleChange(e,"set",row)} sx={{maxWidth: 75}} id="standard-basic" label="Sets" variant="filled" type="number" /></td>
              <td style={{border:"none"}}><TextField value={tableData[row].weight} onChange={(e) => handleChange(e,"weight",row)} sx={{maxWidth: 75}} id="standard-basic" label="Kg" variant="filled" type="number"/></td>
              <td style={{border:"none"}}><TextField value={tableData[row].numberOfReps} onChange={(e) => handleChange(e,"rep",row)} sx={{maxWidth: 75}} id="standard-basic" label="Rep" variant="filled" type="number"/></td>
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
