const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //строку в массив = > проверить каждый эелемент, если он есть то счетчик + и splice в обоих массивах
  let arr1 = [...s1],
      arr2 = [...s2];

  arr1.sort();
  arr2.sort();

  let count = 0;

  mainloop:
  for ( let i = 0; i < arr1.length; i++) {
    for ( let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        count++;
        i--;
        continue mainloop
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
