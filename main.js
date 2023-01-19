import inquirer from "inquirer";

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
    while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * max);
    }
    return [rand1, rand2];
}

function updateWinner(items, winner, loser) {
    items[winner][1]++;
    items[loser][1]++;

    items[winner][0] += (1 / items[winner][1]);
    items[loser][0] -= (1 / items[loser][1]);

    /*
        ALT METHOD
    items[winner][0] = (1 + items[winner][0]) / items[winner][1];
    items[loser][0] = (items[loser][0] - 1) / items[loser][1];
    */
}

const rankingSystem = function (items) {
    if (items.length < 3) {
        return ["Error"];
    }
    const score = createArray(items.length);
    var isRanking = true;
    while (isRanking) {
        var rands = getTwoRandInts(items.length);

        updateWinner(score, 2, 3);
        
        // INSERT COMPARISON LOGIC
        
        isRanking = false;
    }
    return score;
}

var films = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger", "The Avengers"];
var ranks = rankingSystem(films);
console.log(ranks);

inquirer.prompt([
    {
        name: "",
        message: "Who are you?"
    },
]).then(answers => {
    console.info("Name:", answers.test);
});