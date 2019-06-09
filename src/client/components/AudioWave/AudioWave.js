import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class AudioWave extends React.Component{
  render(){
    return(
      <div style={{height: 100}}>
        <Typography variant="h1" gutterBottom style={{marginTop:10}}>
          \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
        </Typography>
        <Grid container  justify="center" style={{marginTop:10}}></Grid>
      </div>
    )
  }
}

export default AudioWave;

      


