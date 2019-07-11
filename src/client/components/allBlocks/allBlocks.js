import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setVisibility,
} from '../../store/actions/blocksActions';
import BlockOfSliders from '../blockOfSliders';
import {
  pauseIcon, playIcon, stopIcon, checkTickIcon,
} from '../../assets/icons/icons';
import './alllBlocks.css';

class AllBlocks extends Component {

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
                  setEffectsValue={this.setEffectsValue}
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
});

export default connect(mapStateToProps, {
  setVisibility,
})(AllBlocks);
