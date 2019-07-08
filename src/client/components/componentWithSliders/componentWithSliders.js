import React, { Component } from 'react';
import './componentWithSliders.css';
import PresetsDropdownSelector from '../presetsDropdownSelector';
import SavePresetsButton from '../savePresetsButton';
import AllBlocks from '../allBlocks';
import SavePressetModalBlock from './savePressetModalBlock';


class ComponentWithSliders extends Component {
  state = {
    isModalBlockShow: false,
  }

  showHideModalBlock = (mouseOrKeyEvent) => {
    const { isModalBlockShow } = this.state;
    if (((mouseOrKeyEvent.type === 'keydown') && (mouseOrKeyEvent.key === 'Escape'))
        || (mouseOrKeyEvent.type === 'click')) {
      this.setState({
        isModalBlockShow: !isModalBlockShow,
      });
    }
  }

  render() {
    const { isModalBlockShow } = this.state;
    return (
      <section className="SlidersComponent">
        {isModalBlockShow && <SavePressetModalBlock showHideModalBlock={this.showHideModalBlock} />}
        <header className="SlidersComponent__header">
          <SavePresetsButton showHideModalBlock={this.showHideModalBlock} />
          <PresetsDropdownSelector />
        </header>
        <main className="SlidersComponent__main">
          <AllBlocks />
        </main>
      </section>
    );
  }
}

export default ComponentWithSliders;
