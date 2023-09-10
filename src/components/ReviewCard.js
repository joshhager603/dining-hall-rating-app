import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';


export default function ReviewCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
          component="img"
          height="140"
          image={require('../img/hotdog.png')}
            />
                <CardContent>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}