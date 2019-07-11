import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../button';
import './modalSavePressetesWindow.css';
import { cancelIcon, saveIcon } from '../../../../assets/icons/icons';
import postFilterData from '../../../../actions/postFilterDataAction';


class SavePressetesModalWindow extends Component {
  state = {
    currentValueFromInput: '',
  }

  handleInputChange = (event) => {
    event.stopPropagation();
    this.setState({ currentValueFromInput: event.target.value });
  }

  render() {
    const {
      showHideModalBlock,
      refFocus,
      currentValueOfFilters,
      handleFilterDataSend,
    } = this.props;

    const { currentValueFromInput } = this.state;
    return (
      <div
        role="button"
        className="modalSavePressetesWindow"
        id="modalSavePressetesWindow"
        tabIndex="0"
        onKeyDown={showHideModalBlock}
        ref={refFocus}
      >
        <div className="headerModalWindow">
          {cancelIcon}
        </div>
        <div className="textArea">
          <h3>Please type presset&#39;s name</h3>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={currentValueFromInput}
          />
        </div>
        <div className="SaveCancelButtonsContainer">
          <Button
            className="ButtonStyleTemplate"
            onClick={() => handleFilterDataSend(currentValueFromInput, currentValueOfFilters)}
            icon={saveIcon}
            value="Save"
          />
          <Button
            className="ButtonStyleTemplate"
            onClick={showHideModalBlock}
            icon={cancelIcon}
            value="Cancel"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentValueOfFilters: state.blocksData,
});

const mapDispatchToProps = dispatch => ({
  handleFilterDataSend: (currentValueFromInput, currentValueOfFilters) => dispatch(postFilterData(currentValueFromInput, currentValueOfFilters)),
});

SavePressetesModalWindow.propTypes = {
  showHideModalBlock: PropTypes.func.isRequired,
  refFocus: PropTypes.func.isRequired,
  handleFilterDataSend: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SavePressetesModalWindow);
