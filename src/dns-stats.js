const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let name = '';
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
    for (let j = 0; j < domains[i].length; j++) {
      if (j === 0) {
        name = `.${domains[i][j]}`;
        console.log(name);
        if(result[name] === undefined) {
          result[name] = 1;
        } else {
          result[name]++;
        }
      } else {
        name += `.${domains[i][j]}`;
        if(result[name] === undefined) {
          result[name] = 1;
        } else {
          result[name]++;
        }
      // } if (j === 2) {
      //   if(result[`.${domains[i][j-2]}.${domains[i][j-1]}.${domains[i][j]}`] === undefined) {
      //     result[`.${domains[i][j-1]}.${domains[i][j]}`] = 1;
      //   } else {
      //     result[`.${domains[i][j-1]}.${domains[i][j]}`]++;
      //   }
      }
    }
  }
  // console.log(domains);
  // console.log(result);
  return result;
}

getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);

module.exports = {
  getDNSStats
};
