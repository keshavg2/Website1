import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  main:{
   backgroundColor: '#3f50b5',
   color:'#ffffff',
   overflow:'hidden',
  },
  action:{
     margin:0,
  }
});
export default function Contact(){
    const classes = useStyles();
    return(
       <div className={classes.main}>
          <Typography variant="h5" style={{color:"#ffffff", textAlign:'center', padding:20,}}>
                   GET IN TOUCH WITH US
        </Typography>
          <Grid container spacing={2} >
            <Grid container xs classes={classes.action}>
                        <Grid item style={{padding:20}}>
                           <Typography variant="h6" gutterBottom>
                                      <EmailIcon/>
                           </Typography>
                           <Typography variant="h6" gutterBottom>
                        <PhoneIcon/>
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                        <LocationOnIcon/>
                        </Typography>
                        </Grid>
                        <Grid item style={{padding:20}}>
                              <Typography variant="h6" gutterBottom>
                                 Mail us at:
                              </Typography>
                              <Typography variant="h6" gutterBottom>
                                 Customer Care:
                              </Typography>
                              <Typography variant="h6" gutterBottom>
                                 Address:
                              </Typography>
                        </Grid>
                        <Grid item style={{padding:20}}>
                           <Typography variant="h6" gutterBottom>
                              abc@neelkanth.com
                           </Typography>
                           <Typography variant="h6" gutterBottom>
                              +919310827822
                           </Typography>
                           <Typography variant="h6" gutterBottom>
                              Behind Fire Station<br/>
                              Sector 37<br/>
                              Gurgaon-122001<br/>
                              India<br/>
                           </Typography>
                        </Grid>
              </Grid>
            <Grid item xs classes={classes.action}>
                  <Typography variant="h4">
                   Quick Links
                  </Typography>
               <Link to="/" style={{textDecoration:'none', color: '#ffffff'}}>
               <Typography variant="h6">
                   Home 
               </Typography>
               </Link>
               <Link to="/Logitic" style={{textDecoration:'none', color: '#ffffff'}}> 
               <Typography variant="h6">
                   About
               </Typography>
               </Link>
               <Link to="/Service" style={{textDecoration:'none', color: '#ffffff'}}>
               <Typography variant="h6">
                 Service
               </Typography>
               </Link>
            </Grid>
          </Grid>
          <Typography variant="body2" style={{textAlign:'center'}}>
            @2020,All rights reserved      
          </Typography>
       </div>   

    );
} 