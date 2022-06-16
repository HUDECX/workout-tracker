import React, { useState } from 'react'

import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';

import {Button} from '@mui/material';

export default function SelectInput({updateMuscleGroup}) {


  const [muscle, setMuscle] = useState("");

  function onChange(e){
    updateMuscleGroup(e.target.value)
  }

  return (
    <div className="select_input">
          <FormControl sx={{minWidth: 220}}>
            <InputLabel id="demo-simple-select-label">Select muscle group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select muscle group"
              onChange={onChange}
            >
              <MenuItem value={"Chest"}>Chest</MenuItem>
              <MenuItem value={"Arms"}>Arms</MenuItem>
              <MenuItem value={"Shoulders"}>Shoulders</MenuItem>
              <MenuItem value={"Core"}>Core</MenuItem>
              <MenuItem value={"Back"}>Back</MenuItem>
              <MenuItem value={"Legs"}>Legs</MenuItem>
            </Select>
          </FormControl>
    </div>
  )
}
