import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'20px 60px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#000000', borderRadius: 3,}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Neelkanth Rodways Corporation of India
          </Typography>
          <Link to="/" style={{textDecoration:'none', color: '#ffffff'}}> 
          <Button color="inherit">Home</Button>
          </Link>
          <Link to="/Logistic" style={{textDecoration:'none', color: '#ffffff'}}>
          <Button color="inherit">About</Button>
          </Link>
          <Link to="/Service" style={{textDecoration:'none', color: '#ffffff'}}>
          <Button color="inherit">Contact Us</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
