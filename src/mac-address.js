const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const array = n.split('-');
  const letters = 'ABCDEF';
  for (let i = 0; i < array.length; i++) {
    if ((letters.includes(array[i][0]) || (array[i][0] >=0 && array[i][0] <=9)) && (letters.includes(array[i][1]) || (array[i][1] >=0 && array[i][1] <=9))) {
      return true;
    } else {
      return false;
    }
  }
}

isMAC48Address('00-1B-63-84-45-E6');

module.exports = {
  isMAC48Address
};
