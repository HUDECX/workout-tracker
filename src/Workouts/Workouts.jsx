import React, { useEffect, useState } from 'react'
import "./Workouts.css"
import db from "../firebase";

import WorkoutCard from '../WorkoutCard/WorkoutCard'
import { collection, onSnapshot } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';



export default function Workouts() {

  const [workouts,setWorkouts] = useState([]);

  //access database
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "workouts"), snapshot => { 
      setWorkouts(snapshot.docs.map(doc => {
        const workout = {...doc.data(),id: doc.id}    //create new array with data + 
        return workout
      }));
    })

    return unsub
  },[])

  return (
    <div className="workouts">
        <h1>My workouts</h1>
        <div className="workoutsCardsContainer">
          {workouts.map(workout => <WorkoutCard date={workout.date} muscleGroup={workout.muscleGroup} duration={workout.duration}/> )}
        </div>
    </div>
  )
}
