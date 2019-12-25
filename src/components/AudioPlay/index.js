import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import Data from '../../data'

function AudioPlay () {
  return (
    <AudioPlayer
      audioFiles={Data}
      iconSize="1.2rem"
      fontSize="1.1rem"
      playerWidth="22rem"
    />
  );
}

export default AudioPlay;