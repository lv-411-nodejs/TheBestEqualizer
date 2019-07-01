import React, { Component } from 'react';
import './componentWithSliders.css';
import PresetsDropdownSelector from '../presetsDropdownSelector';
import SavePresetsButton from '../savePresetsButton';
import AllBlocks from './allSliders';
import SavePressetModalBlock from './savePressetModalBlock';


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
