import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VerticalSlider from '../VerticalSlider/VerticalSlider';
import SaveAlt from '@material-ui/icons/SaveAlt';

class Equalizer extends React.Component{
  render(){
    return(
      <div>
        <Typography variant="h6" gutterBottom style={{marginTop:10}}>Equalizer</Typography>
        <Container fixed>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={8}>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid> 
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
              <Grid item xs={1}> <VerticalSlider/> </Grid>
            </Grid>
        </Container>
        <Grid 
          container 
          direction="row" 
          justify="flex-start" 
          alignItems="flex-start" 
          style={{marginTop:10, marginLeft: 10}}>
          <SaveAlt/>
          <Typography variant="h6" gutterBottom >Save Preset</Typography>
        </Grid>
      </div>
    )
  }
}

export default Equalizer;
  