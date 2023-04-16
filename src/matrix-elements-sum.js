const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = 0; j < matrix.length; j++) {
      console.log(matrix[i][j]);
      if (matrix[i][j] === 0) {
        let counter = i;
        while (counter > 0) {
          sum += matrix[counter - 1][j];
          counter--;
        }
      }
    }
  }
  return sum;
}

getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]);

module.exports = {
  getMatrixElementsSum
};
