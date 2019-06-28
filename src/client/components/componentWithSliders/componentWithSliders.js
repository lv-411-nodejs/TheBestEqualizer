import React from 'react';
import './componentWithSliders.css';

import PresetsDropdownSelector from '../presetsDropdownSelector';
import AllBlocks from './allSliders';
import SavePresetsButton from '../savePresetsButton';
import UploadSongButton from '../uploadSongButton';

const ComponentWithSliders = () => (
  <section className="SlidersComponent">
    <header className="SlidersComponent__header">
      <PresetsDropdownSelector />
    </header>
    <main className="SlidersComponent__main">
      <AllBlocks />
      <div className="SlidersComponent__main--buttons">
        <SavePresetsButton />
        <UploadSongButton />
      </div>
    </main>
  </section>
);

export default ComponentWithSliders;
