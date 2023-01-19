function getTwoRandInts(max) {
    var rand1 = Math.floor(Math.random() * max);
    var rand2 = rand1;
    while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * max);
    }
    return [rand1, rand2];
}

const rankingSystem = function (items) {
    if (items.length < 3) {
        return ["Error"];
    }
    const score = Array(items.length).fill(0);
    var ranking = true;
    while (ranking) {
        var rands = getTwoRandInts(items.length);

        // INSERT COMPARISON LOGIC
        
        ranking = false;
    }
    return score;
}

var films = ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger", "The Avengers"];
var ranks = rankingSystem(films);
console.log(ranks);