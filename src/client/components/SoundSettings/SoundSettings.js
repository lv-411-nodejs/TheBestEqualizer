import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';
import Typography from '@material-ui/core/Typography';

class SoundSettings extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Typography variant="h6" gutterBottom style={{marginTop:10}}>Volume Settings</Typography>
        <Grid container  justify="center" style={{marginTop:10}}>
          <Grid item sm>
            <Paper style={{padding: 15}}>
            <Grid container  justify="center">
              <Grid item sm>
              <HorizontalSlider value={5}/>
              </Grid>
              <Grid item sm>
                <HorizontalSlider/>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper style={{padding: 15}}>
            <Grid container  justify="center">
              <Grid item sm>
                <HorizontalSlider/>
              </Grid>
              <Grid item sm>
                <HorizontalSlider/>
              </Grid>
            </Grid>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default SoundSettings;

