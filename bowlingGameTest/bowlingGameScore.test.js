const { calculateTotalScore } = require('./bowlingGameScore');

describe('Bowling Game', () => {
    describe('Double numbers', () => {
        it('Should return the sum of all inputs ', () => {
            const result = calculateTotalScore([[3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6]]);
            expect(result).toEqual(90);
        });
        it('Should return error when input size is less than 10', () => {
            expect(() => { calculateTotalScore([[1, 2]]); }).toThrow('Invalid Input');
        });
    });
});