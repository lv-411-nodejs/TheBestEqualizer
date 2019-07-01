import React from 'react';
import './componentWithSliders.css';
import PresetsDropdownSelector from '../presetsDropdownSelector';
import SavePresetsButton from '../savePresetsButton';
import AllBlocks from './allSliders';

const ComponentWithSliders = () => (
  <section className="SlidersComponent">
    <header className="SlidersComponent__header">
      <SavePresetsButton />
      <PresetsDropdownSelector />
    </header>
    <main className="SlidersComponent__main">
      <AllBlocks />
    </main>
  </section>
);

export default ComponentWithSliders;
