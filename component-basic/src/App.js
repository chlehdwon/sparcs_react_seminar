import React from 'react';
import './App.css';
import NameCard from './NameCard';

const myName = 'Dongwon Choi';
const myAge = 23;

const App = () => {
  return (
    <div className="App">
      <h3>Name card</h3>
      <NameCard myName={myName} myAge={myAge}></NameCard>
    </div>
  );
};

export default App;
