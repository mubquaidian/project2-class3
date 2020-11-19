import React from 'react';
import './App.css';
import Courses from './courses.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Programmers of PIAIC</h1>
        <hr color='white'/> 
        <h5><Courses courseName="AIC"/></h5> 
        <h5><Courses courseName="IOT"/></h5> 
        <h5><Courses courseName="BC"/></h5> 
        </header>
    </div>
  );
}

export default App;
