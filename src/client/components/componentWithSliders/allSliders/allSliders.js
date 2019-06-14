import React from 'react'
import "./allSliders.css";

import BlockOfSliders from './blockOfSliders'

const BLOCKS = [
    {name: "Distortion", numOfSliders: 2},
    {name: "Flenger", numOfSliders: 4},
    {name: "Reverb", numOfSliders: 2},
    {name: "Delay", numOfSliders: 3},
    {name: "Tremble", numOfSliders: 1}
];


const AllSliders = () => {

  const blocks = [];
  for (let i=0; i<BLOCKS.length; i++){
      blocks.push(<BlockOfSliders
          name={BLOCKS[i].name}
          numOfSliders={BLOCKS[i].numOfSliders}
          key={i}/>)
  }

  return (
      <div className="Sliders">
        {blocks}
      </div>
  )
};

export default AllSliders;
