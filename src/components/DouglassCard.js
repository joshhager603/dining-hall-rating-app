import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DouglassPic from "../static/images/DouglassDining.jpeg"

export default function DouglassCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href ="/Danforth">
        <CardMedia
          component="img"
          height="140"
          image= {DouglassPic}
          alt="danforth"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Douglass Dining Center
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Serving lunch today from 11:00 am - 2:00 pm
          </Typography>
          <Typography variant="body2" color="text.secondary">
            96% of students loved the meal today! 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}