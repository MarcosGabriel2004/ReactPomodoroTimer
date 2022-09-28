import React from 'react';
import '../App.css';
import Timer from '../components/Timer.js';
import Title from '../components/Title.js';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>

        <Timer></Timer>

        
      </header>
    </div>
  );
}

export default Home;