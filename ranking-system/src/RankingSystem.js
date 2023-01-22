import React, { Component } from 'react';
import films from "./films.js";

function createArray(length) {
    var arr = [];
    for (let i = 0; i < length; i++) {
        arr.push([0,0]);
    }
    return arr;
}

function getTwoRandInts(max) {
    var rand1 = Math.floor(Math.random() * max);
    var rand2 = rand1;
    while (rand1 === rand2) {
        rand2 = Math.floor(Math.random() * max);
    }
    return [rand1, rand2];
}

function mutateArray(arr, winner, loser) {
    arr[winner][1]++;
    arr[loser][1]++;
    arr[winner][0] += (1 / arr[winner][1]);
    arr[loser][0] -= (1 / arr[loser][1]);
}

class Button extends Component {
    render() {
        return (
            <button className="App-button" onClick={this.props.onClick}>{this.props.film}</button>
        );
    }
}

class Buttons extends Component {
    render() {
        return (
            <div className="button-container">
                <Button 
                    film={this.props.film1}
                    onClick={this.props.onClick}
                />
                <Button 
                    film={this.props.film2}
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
}

class RankingSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rankings: createArray(films.length),
            ints: getTwoRandInts(films.length)
        }
    }
    ints = getTwoRandInts(films.length);
    updateWinner = (event) => {
        var winner = films.indexOf(event.target.outerText);
        var loser = (winner !== this.state.ints[0]) ? this.state.ints[0] : this.state.ints[1];
        var newRankings = this.state.rankings.slice();

        mutateArray(newRankings, winner, loser);

        this.setState({
            rankings: newRankings,
            ints: getTwoRandInts(films.length)
        });
    }
    render() {
        return (
            <div>
                <Buttons 
                    film1={films[this.state.ints[0]]}
                    film2={films[this.state.ints[1]]}
                    onClick={this.updateWinner}
                />
            </div>
        )
    }
}

export default RankingSystem;