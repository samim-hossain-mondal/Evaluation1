// Feature 1 --> Calculate Total Score
const calculateTotalScore = (arr) => {
    if (arr.length != 10) {
        throw new Error("Invalid Input");
    }
    let score = 0;
    let strike = false;
    let spare = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 10) {
            score += 10;
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
const bestScore = (game1, game2, game3) => {
    const game1Score = calculateTotalScore(game1);
    const game2Score = calculateTotalScore(game2);
    const game3Score = calculateTotalScore(game3);
    return Math.max(game1Score, Math.max(game2Score, game3Score));
};


console.log(calculateTotalScore([[3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6]]));