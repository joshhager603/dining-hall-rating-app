import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Danforthpic from '../static/images/danforth.jpeg'
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href ="/Danforth">
        <CardMedia
          // style={{ height: "250px", paddingTop: "2%" }}
          component="img"
          height="140px"
          image = {require('../static/images/danforth.jpeg')}
          alt = "danforth"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Danforth Dining Center
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Serving lunch today from 11:00 am - 2:00 pm
          </Typography>
          <Typography variant="body2" color="text.secondary">
            50% of students loved the meal today!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}