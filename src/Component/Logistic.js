import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from  './Static/container.jpg';
import CardMedia from  '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import  Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:20,
        margin: '0 20px',
    },
    media:{
      height:350,
    }
  }));

export default function Logistic(){
    const classes = useStyles();
    return(
       <div className={classes.root}>
           <Grid container spacing={3}>
           <Grid xs={6}>
            <Typography variant="h4" gutterBottom>
             Logistic Solution Provider
            </Typography>
            <Typography variant="body1" gutterBottom>
            Headquartered in Gurgaon, Neelkanth Rodways is a logistics service company
            that provides innovative supply chain solutions to its client across India. with our 
            years of experieance in the logistics industry, world class competencies, and an integrated network 
            we bring you reliable ,durable and highly efficient solutions that meet your supply chain needs and empower 
            your business while enabling is save your money at the same time. we differentiate ourselves from other service
            providers through our wide service network, as well as our ability to provide door-to-door services through company 
            company-owned vehicles. We provide our cuustomers with billing, collection, load tracking, pick-up, and delivery-services.
            Operating through owned vehicles enables the safest possible movement for consignments with the lowest incidences of theft,
            pilferage, damage etc.  
            </Typography>
           </Grid>
          <Grid xs={6}>
          <CardMedia
          className={classes.media}
          image={Image}
          />
          </Grid>
          </Grid>
       </div>
    );
}