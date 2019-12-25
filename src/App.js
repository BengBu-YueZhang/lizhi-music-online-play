import React from 'react';
import './App.css';
import AudioPlay from './components/AudioPlay'

function App() {
  return (
    <div className="app">
      <div className="content">
        <img className="bg" src={require('./lizhi.jpg')}/>
        <AudioPlay/>
      </div>
    </div>
  );
}

export default App;
