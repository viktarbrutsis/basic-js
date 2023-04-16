const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
let result = 0;
function getSumOfDigits(n) {
  n = String(n).split('');
  let length = n.length;
  result = n.reduce((a, b) => Number(a) + Number(b));
  // if (result >= 10) {
  //   result += getSumOfDigits(result);
  // }
  if (result >=10) {
    getSumOfDigits(result);
  }
  console.log(n);
  return result;
}

getSumOfDigits(91);

module.exports = {
  getSumOfDigits
};
