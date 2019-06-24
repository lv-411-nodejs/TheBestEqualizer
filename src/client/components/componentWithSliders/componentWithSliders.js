import React from 'react';
import './componentWithSliders.css';

import SelectItem from './selectItem';
import AllBlocks from './allSliders';
import SaveButton from './saveButton';
import UploadButton from './uploadButton';

const ComponentWithSliders = () => (
  <section className="SlidersComponent">
    <header className="SlidersComponent__header">
      <SelectItem/>
    </header>
    <main className="SlidersComponent__main">
      <AllBlocks/>
      <div className="SlidersComponent__main--buttons">
        <SaveButton/>
        <UploadButton/>
      </div>
    </main>
  </section>
);

export default ComponentWithSliders;
