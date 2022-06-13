import React from 'react'
import "./WorkoutCard.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import placeholderImg from "../assets/images/placesholder.jpg"


export default function WorkoutCard({date = "none", duration = "none", id}) {

  return (
    <Card className='workouts__card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={placeholderImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chest
        </Typography>
        <Typography variant="body2" color="white">
          <ul>
            <li>Date: <span className='workoutCard__dbText'>{date}</span></li>
            <li>Duration (h): <span className='workoutCard__dbText'>{duration}</span></li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">Show me details</Button>
      </CardActions>
    </Card>
  );
}
