import React from 'react';
import Home from './Home';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Image from '../Component/Static/truck.jpg'; // Import using relative path
import Typography from '@material-ui/core/Typography';

const styles = {
    root:{
     overflow:'hidden',
     fontFamily: 'Arial, Helvetica, sans-serif',
    },
    paperContainer: {
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundImage: `url(${Image})`,
        '&::before': {
            opacity:0.8,
            zIndex:1000,
        },
    },
    marginSide:{
        marginTop: '20px',
        marginLeft: '400px',
        paddingRight: '20px',
    },
    action:{
        marginTop: '20px',
    },
    time:{
      marginTop:'120px',
      textAlign: 'center',
      color:'#ffffff',
    },
    neel:{
      textAlign: 'center',
      marginTop:'150px',
      color:'#ffffff',
      fontWeight:'bolder',
    },
    road:{
        textAlign: 'center',
        color:'#ffffff',
        fontWeight:'bolder',
    }
};

export default class Background extends React.Component{
    render(){
        return(
            <div style={styles.root}>
            <Paper style={styles.paperContainer} 
            direction="column"
            justify="space-evenly"
            alignItems="center">
              <Home/>
              <Typography variant="h1" style={styles.neel}>Neelkanth</Typography>
              <Typography variant="h4" style={styles.road}>Rodways Corporation of India</Typography>
               <Typography variant="h6" style={styles.time}>
                   Get your items Delivered <Typography variant="h6" style={{color:'#f44336',display:'inline-block',fontWeight:'bold'}}>Intime</Typography> & <Typography variant="h6" style={{color:'#f44336', display:'inline-block', fontWeight:'bold'}}>Intact</Typography>
               </Typography>
              <Grid container spacing={2}>
              <Grid style={styles.marginSide}>
                 <Button variant="contained" color="inherit">Check Service Availability</Button>
              </Grid>
              <Grid xs style={styles.action}>
                  <Button variant="contained" color="primary">Track your Packages</Button>
              </Grid>
              </Grid>
            </Paper>
            </div>
        )
    }
}
