import React from 'react'
import "./Navbar.css";
import logo from "../assets/images/logo_priehladne.png"

import { Button } from '@mui/material';

export default function Navbar() {
  return (
    <div className="navbar">
      <img className='logo' src={logo} alt="" />
      <h2>Workout tracker</h2>
      <Button variant="contained">Create new workout</Button>
      <ul>
        <li><a href="/package-lock.json#">My workouts</a></li>
        <li><a href="/package-lock.json#">My workouts</a></li>
        <li><a href="/package-lock.json#">My workouts</a></li>
        <li><a href="/package-lock.json#">My workouts</a></li>
        <li><a href="/package-lock.json#">My workouts</a></li>
      </ul>
    </div>
  )
}
