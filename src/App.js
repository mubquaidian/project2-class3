import React from 'react';
import './App.css';
import Courses from './courses.js';
import Dinner from './Dinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Programmers of PIAIC</h1>
        <hr color='white'/> 
        <h5><Courses courseName="AIC & BC"/></h5> 
        <h7><Dinner cooking="pasta"/></h7>
        </header>
    </div>
  );
}

export default App;
