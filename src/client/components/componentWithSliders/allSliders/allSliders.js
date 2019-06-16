import React from 'react';
import './allSliders.css';

import BlockOfSliders from './blockOfSliders';

const BLOCKS = [
  { name: 'Distortion', numOfSliders: 2 },
  { name: 'Flenger', numOfSliders: 4 },
  { name: 'Reverb', numOfSliders: 2 },
  { name: 'Delay', numOfSliders: 3 },
  { name: 'Tremble', numOfSliders: 1 }
];

const AllSliders = () => (
  <div className="Sliders">
    {BLOCKS.map((block, i) => {
      return <BlockOfSliders
        name={block.name}
        numOfSliders={block.numOfSliders}
        key={i}
      />;
    })}
  </div>
);

export default AllSliders;
