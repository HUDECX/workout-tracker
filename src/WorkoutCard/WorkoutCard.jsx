import React from 'react'
import "./WorkoutCard.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Fade, Modal } from '@mui/material';
import { Box } from '@mui/material';

import chestImg from "../assets/images/chestImg.jpg"
import armsImg from "../assets/images/armsImg.jpg"
import legsImg from "../assets/images/legsImg.jpg"
import backImg from "../assets/images/backImg.jpg"
import coreImg from "../assets/images/coreImg.jpg"
import shouldersImg from "../assets/images/shouldersImg.jpg"

import { useState } from 'react';
import { useEffect } from 'react';






export default function WorkoutCard({firestoreData}) {

  const [modalOpen,setModalOpen] = useState(false);
  const [cardImage,setCardImage] = useState("");

  useEffect(() => {
    switch (firestoreData.muscleGroup) {
      case "Chest":
        setCardImage(chestImg)
        break;
      case "Arms":
        setCardImage(armsImg)
        break;
      case "Shoulders":
        setCardImage(shouldersImg)
        break;
      case "Core":
        setCardImage(coreImg)
        break;
      case "Back":
        setCardImage(backImg)
        break;
      case "Legs":
        setCardImage(legsImg)
        break;
    
      default:
        break;
    }
  },[])

  console.log(cardImage);

  return (
    <>
      <Card className='workouts__card' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="160"
          image={cardImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firestoreData.muscleGroup}
          </Typography>
          <Typography variant="body2" color="white">
            <ul>
              <li>Date: <span className='workoutCard__dbText'>{firestoreData.date}</span></li>
              <li>Duration (h): <span className='workoutCard__dbText'>{firestoreData.duration}</span></li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='text' size="small" onClick={() => setModalOpen(true)}><InfoIcon /></Button>
        </CardActions>
      </Card>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={modalOpen}>
          <Box className='modalContainer'>
            <div className="modalHeader">
              <h2>{firestoreData.muscleGroup} workout</h2>
            </div>
            <div className="basic-info-container">
              <h3>Date: {firestoreData.date}</h3>
              <h3>Duration: {firestoreData.duration}h</h3>
            </div>
            
            {firestoreData.exercises.map(exercise => {
              return(
                <table class="table exerciseDetailTable">
                  <thead>
                    <h4>{exercise.name}</h4>
                    <tr>
                      <td>Sets</td>
                      <td>Weight</td>
                      <td>Reps</td>
                    </tr>
                  </thead>
                  <tbody>
                    {exercise.exercise.map(tableRow => {
                      return(
                        <tr>
                          <td>{tableRow.sets}</td>
                          <td>{tableRow.weight}</td>
                          <td>{tableRow.reps}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
            })}
            
            
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
