import React from 'react';
import './song.css';

const Song = () => (
  <div className="SlidersComponent__main--song">
    <p className="title">Artist name - Name of song</p>
    <audio controls className="audio">
      <source src="http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
    </audio>
  </div>
);

export default Song;
