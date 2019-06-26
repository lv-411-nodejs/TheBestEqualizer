import React from 'react';
import './componentWithSliders.css';

import SelectItem from './selectItem';
import AllSliders from './allSliders';
import SaveButton from './saveButton';
import UploadButton from './uploadButton';
import Song from './song';

const ComponentWithSliders = () => (
  <section className="SlidersComponent">
    <header className="SlidersComponent__header">
      <SelectItem/>
    </header>
    <main className="SlidersComponent__main">
      <AllSliders/>
      <div className="SlidersComponent__main--buttons">
        <SaveButton/>        
        <UploadButton/>
      </div>
      <Song/>
    </main>
  </section>
);

export default ComponentWithSliders;
