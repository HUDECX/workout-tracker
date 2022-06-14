import React from 'react'

import { TextField } from '@mui/material'



export default function ExerciseTable() {
  return (
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
        <tr>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Sets" variant="filled" type="number"/></td>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Kg" variant="filled" type="number"/></td>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Rep" variant="filled" type="number"/></td>
        </tr>
        <tr>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Sets" variant="filled" type="number"/></td>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Kg" variant="filled" type="number"/></td>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Rep" variant="filled" type="number"/></td>
        </tr>
        <tr>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Sets" variant="filled" type="number"/></td>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Kg" variant="filled" type="number"/></td>
          <td style={{border:"none"}}><TextField sx={{maxWidth: 75}} id="standard-basic" label="Rep" variant="filled" type="number"/></td>
        </tr>
      </tbody>
    </table>
  )
}
