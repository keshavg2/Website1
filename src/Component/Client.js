import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
    main:{
     padding:20,
    },
    media: {
        height: 120,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    root: {
        margin:10,
    },

});

export default function Client(){
    const classes = useStyles();
    return(
        <div className={classes.main}>
        <Typography variant="h5" style={{textAlign:'center', textDecoration:'underline', padding:20,}}>
                  OUR CLIENTS 
        </Typography>
        <Grid container spacing={4}>
            <Grid xs>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://lh3.googleusercontent.com/proxy/NRzvsDJ1rWcwZXmLqYWCjNg3vrS28iuSe5oRPpanfayUUYgr5uG_hkPBaOHu_XfTTYCCrCZ7dkH3mrXfOQ9hBg0ausXHsCpd5tAx1WwK5lLWTKqKUwJqBA2DuwHg"
              />
              </CardActionArea>
              </Card>
            </Grid>
            <Grid xs>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://autotechreview.com/images/Varroc-excellence-logo-02.jpg"
              />
              </CardActionArea>
              </Card>
            </Grid>
            <Grid xs>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://i.ytimg.com/vi/OJEAFGXJ_wE/maxresdefault.jpg"
              />
              </CardActionArea>
              </Card>
            </Grid>
            <Grid xs>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.tyrepress.com/wp-content/uploads/2019/08/endurance-technologies-logo.jpg"
              />
              </CardActionArea>
              </Card>
            </Grid>
        </Grid>
        </div>
    );
}