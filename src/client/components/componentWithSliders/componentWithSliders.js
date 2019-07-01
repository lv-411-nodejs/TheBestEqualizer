import React, { Component } from 'react';
import './componentWithSliders.css';

import SelectItem from './selectItem';
import AllBlocks from './allSliders';
import SaveButton from './saveButton';
import UploadButton from './uploadButton';
import SavePressetModalBlock  from './savePressetModalBlock'


class ComponentWithSliders extends Component {
  state = {
    isModalBlockShow: false,
  }

  showHideModalBlock = (clickOrEscKeyEvent) => {
    const { isModalBlockShow } = this.state;
    if (((clickOrEscKeyEvent.type === 'keydown') && (clickOrEscKeyEvent.key === 'Escape'))
        || (clickOrEscKeyEvent.type === 'click')) {
      this.setState({
        isModalBlockShow: !isModalBlockShow,
      });
    }
  }

  render() {
    return (
  <section className="SlidersComponent">
      {this.state.isModalBlockShow && <SavePressetModalBlock showHideModalBlock={this.showHideModalBlock}/>}
    <header className="SlidersComponent__header">
      <SelectItem />
    </header>
    <main className="SlidersComponent__main">
      <AllBlocks />
      <div className="SlidersComponent__main--buttons">
        <SaveButton onclick={this.showHideModalBlock}/>
        <UploadButton />
      </div>
    </main>
  </section>
  );
 }
}

export default ComponentWithSliders;
