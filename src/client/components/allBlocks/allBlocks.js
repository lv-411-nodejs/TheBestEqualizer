import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setVisibility,
} from '../../store/actions/blocksActions';
import BlockOfSliders from '../blockOfSliders';
import { checkTickIcon } from '../../assets/icons/icons';
import './alllBlocks.css';

class AllBlocks extends Component {
  componentDidUpdate() {
    // this.props.sound ? this.attachFiltersToSource(this.props.sound) : null;
  }
  
  attachFiltersToSource = sourceInput => this.props.blocksData.forEach(({ createEffect, isVisible }) => {
    isVisible ? sourceInput.addEffect(createEffect) : null;
  });
  render() {
    const { setVisibility, blocksData } = this.props;
    return (
      <div className="SlidersComponent__main--container">
        <div className="AllSliders">
          <div className="ListOfEffects">
            {
              blocksData.map(({ name, isVisible }) => (
                <button
                  className="Effect"
                  key={name}
                  type="button"
                  id={name}
                  name={name}
                  onClick={() => setVisibility(name)}
                >
                  {name}
                  {' '}
                  {isVisible ? checkTickIcon : ''}
                </button>
              ))
            }
          </div>
          <div className="Sliders">
            {blocksData.map(({
              name, effects, isVisible,
            }) => (isVisible
              ? (
                <BlockOfSliders
                  name={name}
                  effects={effects}
                  key={name}
                />
              )
              : null))}
          </div>
        </div>
      </div>
    );
  }
}

AllBlocks.propTypes = {
  blocksData: PropTypes.instanceOf(Array),
  setVisibility: PropTypes.func,
};

const mapStateToProps = state => ({
  blocksData: state.blocksData,
  sound: state.audioData.sound,
  voice: state.audioData.voice,
});

export default connect(mapStateToProps, { setVisibility })(AllBlocks);
