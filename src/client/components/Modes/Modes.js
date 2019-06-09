import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import SpeakerGroup from '@material-ui/icons/SpeakerGroup'
import Hearing from '@material-ui/icons/Hearing';
import Headset from '@material-ui/icons/Headset';

class Modes extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Typography variant="h6" gutterBottom style={{marginTop:10}}>Modes</Typography>
        <Grid container justify="center" >
          <Grid item sm={3}>
            <Paper style={{padding: 10}}>
              <Grid container  justify="center">
                <ThreeDRotationIcon/>
                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}}>
                    3D
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sm={3} >
            <Paper style={{padding: 10}}>
              <Grid container  justify="center">
                <Headset/>
                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}}>
                  Headset
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper style={{padding: 10}}>
              <Grid container  justify="center">
                <SpeakerGroup/>
                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}}>
                    Speakers
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <Paper style={{padding: 10}}>
              <Grid container  justify="center">
                <Hearing/>
                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}}>
                  Extra
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default Modes;
