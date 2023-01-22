import React, { useState } from 'react';
import films from "./films.js";

function createArray(length) {
    var arr = [];
    for (let i = 0; i < length; i++) {
        arr.push([0,0]);
    }
    console.log(arr);
    return arr;
}

class RankingSystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rankings: createArray(films.length)
        }
    }
    // const [rankings, setRankings] = useState(createArray[films.length]);
    render() {
        return (
            <div>
                {this.state.rankings}
            </div>
        )
    }
}

export default RankingSystem;