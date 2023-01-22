import './App.css';
import React, { useState } from 'react';
//import RankingSystem from './RankingSystem.js';

var films = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America", "The Avengers"];

function updateWinner(items, winner, loser) {
  items[winner][1]++;
  items[loser][1]++;

  items[winner][0] += (1 / items[winner][1]);
  items[loser][0] -= (1 / items[loser][1]);
}

function getTwoRandInts(max) {
  var rand1 = Math.floor(Math.random() * max);
  var rand2 = rand1;
  while (rand1 === rand2) {
      rand2 = Math.floor(Math.random() * max);
  }
  return [rand1, rand2];
}

function createArray(length) {
  var arr = [];
  for (let i = 0; i < length; i++) {
      arr.push([0,0]);
  }
  return arr;
}

/*function Rankings(props) {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}*/

function Buttons() {
  var ints = getTwoRandInts(films.length);
  return (
    <div className="button-container">
      <button className="App-button" onClick={updateWinner}>{films[ints[0]]}</button>
      <button className="App-button" onClick={updateWinner}>{films[ints[1]]}</button>
    </div>
  );
}

function RankingSystem() {
  const [rankings, setRankings] = useState(createArray(films.length));
  return (
    <div>
      <Buttons />
      {rankings}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <RankingSystem />
    </div>
  );
}

export default App;
