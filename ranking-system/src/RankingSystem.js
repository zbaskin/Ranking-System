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

function isolateData(arr, titles) {
    var ranks = [];
    var films = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] !== 0) {
            ranks.push(arr[i]);
            films.push(titles[i]);
        }
    }
    return {ranks, films};
}

function flatten(items) {
    var flat = [];
    for (let i = 0; i < items.length; i++) {
        flat.push(items[i][0]);
    }
    return flat;
}

function bubbleSort(arr, pivot) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                [pivot[j + 1], pivot[j]] = [pivot[j], pivot[j + 1]];
            }
        }
    }
}

class Switch extends Component {
    render() {
        return (
            <label className="switch">
                <input onChange={this.props.onChange} checked={this.props.isChecked} type="checkbox" />
                <span className="slider round"></span>
            </label>
        );
    }
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

class Rankings extends Component {
    render() {
        var films = this.props.films;
        var rankings = this.props.rankings;

        var pureData = isolateData(rankings, films);
        var ranks = flatten(pureData.ranks);
        bubbleSort(ranks, pureData.films);
        
        var trueRanks = ranks.reverse();
        var trueFilms = pureData.films.reverse();

        var rows = [];

        for (let i = 0; i < trueRanks.length; i++) {
            rows.push(<p className="ranking" key={i}>{i + 1}. {trueFilms[i]}</p>)
        }

        return (
            <div className="ranking-container">
                {rows}
            </div>
        );
    }
}

class RankingSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rankings: createArray(films.length),
            ints: getTwoRandInts(films.length),
            isChecked: false
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
    updateChecked = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    render() {
        return (
            <div>
                <Switch
                    isChecked={this.state.isChecked}
                    onChange={this.updateChecked}
                />
                {
                    !this.state.isChecked ? 
                    <Buttons 
                        film1={films[this.state.ints[0]]}
                        film2={films[this.state.ints[1]]}
                        onClick={this.updateWinner}
                    /> :
                    <Rankings
                        films={films}
                        rankings={this.state.rankings}
                    />
                }
            </div>
        )
    }
}

export default RankingSystem;