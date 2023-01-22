import './App.css';
import React, { useState } from 'react';
import RankingSystem from './RankingSystem.js';

var films = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America", "The Avengers"];

function updateWinner(props) {
  var winner = films.indexOf(props.film);
  var loser = (winner !== props.ints[0]) ? props.ints[0] : props.ints[1];
  console.log(winner);
  console.log(loser);
  /*items[winner][1]++;
  items[loser][1]++;

  items[winner][0] += (1 / items[winner][1]);
  items[loser][0] -= (1 / items[loser][1]);*/
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

function Button(props) {
  return (
    <button className="App-button" onClick={() => updateWinner(props)}>{props.film}</button>
  );
}

function RankingSystems() {
  const [rankings, setRankings] = useState(createArray(films.length));
  var ints = getTwoRandInts(films.length);
  return (
    <div>
      <div className="button-container">
        <Button 
          film={films[ints[0]]} 
          ints={ints}
        />
        <Button 
          film={films[ints[1]]} 
          ints={ints}
        />
      </div>
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
