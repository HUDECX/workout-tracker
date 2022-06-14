import React from 'react'
import "./Navbar.css";
import logo from "../assets/images/logo_priehladne.png"
import { Link } from "react-router-dom"

import { Button } from '@mui/material';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><img className='logo' src={logo} alt="" /></Link>
      <h2>Workout tracker</h2>
      <Link to="/createWorkout" className='navbar__createWorkoutBtn'><Button variant="contained">Create new workout</Button></Link> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myWorkouts">My workouts</Link></li>
        <li><Link to="/">My workouts</Link></li>
        <li><Link to="/">My workouts</Link></li>
      </ul>
    </div>
  )
}
