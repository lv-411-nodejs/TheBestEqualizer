import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ModalSavePressetesWindow from './modalSavePressetesWindow';
import BackgroundUnderModelWindow from './backgroundUnderModelWindow';

class SavePressetModalBlock extends Component {
    autoFocusModalSavePressetesWindow = (elementFromRef) => {
      if (elementFromRef) {
        elementFromRef.focus();
      }
    }

    render() {
      const { showHideModalBlock } = this.props;
      return (
        <Fragment>
          <ModalSavePressetesWindow
            showHideModalBlock={showHideModalBlock}
            refFocus={this.autoFocusModalSavePressetesWindow}
          />
          <BackgroundUnderModelWindow backgroundClick={showHideModalBlock} />
        </Fragment>
      );
    }
}

SavePressetModalBlock.propTypes = {
  showHideModalBlock: PropTypes.func.isRequired,
};

export default SavePressetModalBlock;
