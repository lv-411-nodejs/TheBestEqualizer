import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  appBarStyles:{
    backgroundColor: '#141414' 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarStyles} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} align={'left'}>
            The Best Equalizer
          </Typography>
          <Button color="inherit">Name Surname</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
