import { Grid, Typography } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { fetchCar } from '../../../../lib/car';
import { CarModel } from '../../../../models/Car';
import { isEmpty } from '../../../../utils/common';
import db from '../../../../utils/db';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Head from 'next/head';

interface CarDetailsProps {
  car: CarModel | null | undefined;
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CarDetails = ({ car }: CarDetailsProps) => {
  if (!car) return <div>Sorry, car not found</div>;

  return (
    <div>
      <Head>
        <title>{car.company + ' ' + car.model}</title>
      </Head>
      <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <Image
              alt='image'
              src={car.photoUrl}
              width={'550px'}
              height={'400px'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={7} container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='h4' component='h4'>
                  {car.company + ' ' + car.model}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  <b>RS:</b> {car.price}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  <b>Year:</b> {new Date(car.year).getFullYear()}
                </Typography>
                <Typography gutterBottom variant='body2'>
                  <b> KMs:</b> {car.kilometers}
                </Typography>
                <Typography gutterBottom variant='body2'>
                  <b> Fule Type:</b> {car.fuelType}
                </Typography>
                <Typography gutterBottom variant='body2'>
                  <b>Details:</b> {car.details}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params.id;

  const car = await fetchCar(id);
  return {
    props: { car: !isEmpty(car) ? db.convertDocToObject(car) : null },
  };
};

export default CarDetails;
