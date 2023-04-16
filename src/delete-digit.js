const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  string = string.split('');
  let min = 0;
  let result;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] < string[i + 1]) {
      min = string[i];
    }
  }
  console.log(min.toString());
  console.log(string.indexOf(min));
  string.splice(string.indexOf(min), 1);
  console.log(string);
  result = Number(string.join(''));
  return result;
}

deleteDigit(765253);

module.exports = {
  deleteDigit
};
