import React, { Component } from 'react';
import './componentWithSliders.css';
import PresetsDropdownSelector from '../presetsDropdownSelector';
import AllBlocks from '../allBlocks';
import SavePressetModalBlock from '../savePressetModalBlock';
import { saveIcon } from '../../assets/icons/icons';
import Button from '../button';
import fetchRequest from '../../helpers/fetchRequest';

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

  handleGetData = () => {
    fetchRequest.get('http://localhost:8080/effects',
      {
        params: { title: 'myNewpewsen' },
      })
      .then(response => console.log(response.data.presets));
  };

  render() {
    const { isModalBlockShow } = this.state;
    return (
      <section className="SlidersComponent">
        {isModalBlockShow && <SavePressetModalBlock showHideModalBlock={this.showHideModalBlock} />}
        <header className="SlidersComponent__header">
          <Button
            className="ButtonStyleTemplate SavePresetButton"
            onClick={this.showHideModalBlock}
            icon={saveIcon}
            value="Save Preset"
          />
          <button onClick={this.handleGetData}>get data</button>
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
