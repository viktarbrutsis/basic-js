const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrayMinus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrayMinus.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
      i--;
    }
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arrayMinus.length; i++) {
    arr.splice(arrayMinus[i], 0, -1);
  }
  return arr;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

module.exports = {
  sortByHeight
};
