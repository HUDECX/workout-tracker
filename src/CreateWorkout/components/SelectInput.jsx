import React from 'react'

import { FormControl, InputLabel, Select, MenuItem} from '@mui/material';


export default function SelectInput() {
  return (
    <div className="select_input">
          <FormControl sx={{minWidth: 220}}>
            <InputLabel id="demo-simple-select-label">Select muscle group</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select muscle group"
            >
              <MenuItem value={1}>Chest</MenuItem>
              <MenuItem value={2}>Arms</MenuItem>
              <MenuItem value={3}>Shoulders</MenuItem>
              <MenuItem value={4}>Core</MenuItem>
              <MenuItem value={5}>Back</MenuItem>
              <MenuItem value={6}>Legs</MenuItem>
            </Select>
          </FormControl>
    </div>
  )
}
