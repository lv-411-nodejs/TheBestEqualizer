import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './filterToggler.css';

const filterToggler = (props) => {
  const { audioData, blocksData } = props;
  const removeSourceFilters = sourceInput => sourceInput
  && blocksData.forEach(({ createEffect, isVisible }) => isVisible
    && sourceInput.removeEffect(createEffect));

  const attachFiltersToSource = sourceInput => blocksData.forEach((
    {
      createEffect,
      isVisible,
    },
  ) => isVisible && sourceInput && sourceInput.addEffect(createEffect));

  const onToggler = () => {
    audioData.onToggle = !audioData.onToggle;
    if (audioData.onToggle) {
      removeSourceFilters(audioData.sound);
      attachFiltersToSource(audioData.voice);
    } else {
      removeSourceFilters(audioData.voice);
      attachFiltersToSource(audioData.sound);
    }
  };

  return (
    <div className="modesElement">
      <span className="labels">Sound</span>
      <label htmlFor="toggler" className="switch">
        <input id="toggler" type="checkbox" onClick={onToggler} />
        <span className="slider" />
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
