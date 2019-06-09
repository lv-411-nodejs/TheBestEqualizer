import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({

  formControl: {
    minWidth: 180,
    position: 'absolute',
    right: 10,
    padding: 10
  },
}));


function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">

      <FormControl className={classes.formControl} position="right">
        <InputLabel htmlFor="demo-controlled-open-select">Presets</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'presets',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value={40}>Classic</MenuItem>
          <MenuItem value={10}>Folk</MenuItem>
          <MenuItem value={20}>Rock</MenuItem>
          <MenuItem value={30}>Pop</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default ControlledOpenSelect;