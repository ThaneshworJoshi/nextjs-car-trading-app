import React from 'react';
import { CarModel } from '../../../models/Car';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';

export interface CarCardProps {
  car: CarModel;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Link href={`/car/${car.company}/${car.model}/${car._id}`}>
      <a>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title={car.company + ' ' + car.model}
            subheader={`$${car.price}`}
          />
          <CardMedia
            component='img'
            height='194'
            image={car.photoUrl}
            alt={car.company + ' ' + car.model}
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {car.details}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </a>
    </Link>
  );
};

export default CarCard;
