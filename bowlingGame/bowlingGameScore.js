// Feature 1 --> Calculate Total Score
const calculateTotalScore = (arr) => {
    if (arr.length != 10) {
        throw new Error("Invalid Input");
    }
    let score = 0;
    let strike = false;
    let spare = false;
    for (let i = 0; i < arr.length; i++) {
        if (i != 9 && arr[i].length > 2) {
            throw new Error("Invalid Input");
        }
        if (arr[i][0] === 10) {
            score += 10;
            if (i == 9) {
                score += arr[i][1] + arr[i][2];
            }
            strike = true;
            if (spare == true) {
                score += 10;
                spare = false;
            }
        }
        else if (arr[i][0] + arr[i][1] === 10) {
            score += 10;
            spare = true;
            if (strike == true) {
                score += 10;
                strike = false;
            }
        }
        else {
            score += (arr[i][0] + arr[i][1]);
            if (strike == true) {
                score += (arr[i][0] + arr[i][1]);
                strike = false;
            }
            else if (spare == true) {
                score += arr[i][0];
                spare = false;
            }
        }
    }
    return score;
};

// Feature 2 --> Find Best Score in set of Games
const bestScore = (gameArray) => {
    let mx = calculateTotalScore(gameArray[0]);
    for (let i = 1; i < gameArray.length; i++) {
        mx = Math.max(mx, calculateTotalScore(gameArray[i]));
    }
    return mx;
};
console.log(calculateTotalScore([[3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6]]));
console.log(calculateTotalScore([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 10, 10]]));
console.log(calculateTotalScore([[6, 4], [3, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]));
console.log(calculateTotalScore([[6, 4, 3], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]));

let game1 = [[3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6]];
let game2 = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 10, 10]];
let game3 = [[6, 4], [3, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

let gameArray = [];
gameArray.push(game1);
gameArray.push(game2);
gameArray.push(game3);

console.log(bestScore(gameArray));

module.export = { calculateTotalScore, bestScore };