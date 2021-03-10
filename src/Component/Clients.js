import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
      maxWidth: 700,
      margin: 40,
    },
    main:{
      backgroundColor: '#000000',
      overflow:'hidden',
    },
    media: {
      height: 140,
    },
});
export default function Clients(){
    const classes = useStyles();
    return(
        <div className={classes.main}>
        <Typography variant="h5" style={{color:"#ffffff", textAlign:'center', textDecoration:'underline',padding:20}}>
                  WHAT OUR CLIENTS ARE SAYING
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent classes={classes.action}>
                  <Typography gutterBottom variant="body1">
                    "I LIKE HOW I CAN DEPEND ON THIS SERVICE 
                    NEELKANTH RODWAYS PROVIDES"<br/>
                                     --HERO MOTOCORP
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Grid>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent classes={classes.action}>
                  <Typography gutterBottom variant="body1">
                   "NEELKANTH ROADWAYS COMMITMENT TO QUALITY CLOSELY ALIGNS WITH THE 
                   PROMISES WE MAKE TO OUR OWN CUSTOMERS."<br/>
                   --BONY POLYMERS
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
        </Grid>
        </div>
    );
}