import React from 'react';
import './componentWithSliders.css';

import SelectItem from '../presetsDropdownSelector';
import AllBlocks from './allSliders';
import SaveButton from '../saveButton';
import UploadSongButton from '../uploadSongButton';

const ComponentWithSliders = () => (
  <section className="SlidersComponent">
    <header className="SlidersComponent__header">
      <SelectItem />
    </header>
    <main className="SlidersComponent__main">
      <AllBlocks />
      <div className="SlidersComponent__main--buttons">
        <SaveButton />
        <UploadSongButton />
      </div>
    </main>
  </section>
);

export default ComponentWithSliders;
