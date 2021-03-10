import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image1 from './Static/container.jpg';
import Image2 from './Static/Warehouse.jpg';
import Image3 from './Static/brnd.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    borderRadius: 16,
    margin:10,
  },
  main:{
    backgroundColor: '#000000',
    overflow:'hidden',
  },
  media: {
    height: 250,
  },
  action: {
    textAlign: 'center',
    margin: 'auto',
  },
  done:{
    textAlign:'center',
    textDecoration:'inherit',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Typography variant="h5" style={{color:"#ffffff", textAlign:'center', textDecoration:'underline',padding:20}}>
                OUR SERVICES
      </Typography>
    <Grid container spacing={3}>
      <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Image1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" classes={classes.action}>
                  Supply chain Logistics
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >
              <Button size="small" color="primary" classes={classes.action}>
                More Details
              </Button>
            </CardActions>
          </Card> 
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Image2}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2" classes={classes.action}>
                  WareHousing Solution
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions >
              <Button size="small" color="primary" classes={classes.action}>
                More Details
              </Button>
            </CardActions>
          </Card>
      </Grid>
      <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Image3}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2" classes={classes.action}>
                  Full Truck Load Service
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" classes={classes.action}>
                More Details
              </Button>
            </CardActions>
          </Card>
      </Grid>
    </Grid>
  </div>  
  );
}
