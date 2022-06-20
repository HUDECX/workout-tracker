import React, { useState } from 'react'
import "./Navbar.css";
import logo from "../assets/images/logo_priehladne.png"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

import { Button } from '@mui/material';

export default function Navbar() {


  return (
    <>
      <div className="navbar">
        <Link to="/"><img className='logo' src={logo} alt="" /></Link>
        <h2>Workout tracker</h2>
        <Link to="/createWorkout" className='navbar__createWorkoutBtn'><Button variant="outlined"><AddIcon />Create new workout</Button></Link> 
        <ul>
          <li><Link className='navLink' to="/"><HomeIcon />Home</Link></li>
          <li><Link className='navLink' to="/myWorkouts">My workouts</Link></li>
          <li><Link className='navLink' to="/">My workouts</Link></li>
          <li><Link className='navLink' to="/">My workouts</Link></li>
        </ul>
        <div id="navSignatureContainer">
          <p>Made by Richard Hudec</p>
        </div>
      </div>
    </>
  )
}
