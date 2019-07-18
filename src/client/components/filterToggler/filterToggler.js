import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './filterToggler.css';

const filterToggler = (props) => {
  const onToggler = () => {
    props.audioData.onToggle = !props.audioData.onToggle;
    if(props.audioData.onToggle) {
      removeSourceFilters(props.audioData.sound);
      attachFiltersToSource(props.audioData.voice);
    } else {
      removeSourceFilters(props.audioData.voice);
      attachFiltersToSource(props.audioData.sound);
    }
  }
  const removeSourceFilters = sourceInput => {
    sourceInput && props.blocksData.forEach(({ createEffect, isVisible }) =>
    isVisible && sourceInput.removeEffect(createEffect));
  };

  const attachFiltersToSource = sourceInput => props.blocksData.forEach(({ createEffect, isVisible }) => {
    isVisible && sourceInput && sourceInput.addEffect(createEffect);
  });
  return (
    <div className='modesElement'>
      <span className="labels">Sound</span>
      <label className='switch'>
        <input type="checkbox" onClick={onToggler} />
        <span className='slider'></span>
      </label>
      <span className="labels">Voice</span>
    </div>
  );
};
filterToggler.propTypes = {
  audioData: PropTypes.instanceOf(Object).isRequired,
  blocksData: PropTypes.instanceOf(Array).isRequired,
  voice: PropTypes.instanceOf(Object),
  sound: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  audioData: state.audioData,
  blocksData: state.blocksData,
});

export default connect(mapStateToProps)(filterToggler);
