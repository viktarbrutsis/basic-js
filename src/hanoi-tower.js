const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

// 2 ** n - 1
function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {},
      turnsQuantity = 2 ** disksNumber - 1,
      secondsQuantity = Math.floor((turnsQuantity * 3600) / turnsSpeed);
  result.turns = turnsQuantity;
  result.seconds = secondsQuantity;
  console.log(result);
  return result;
  }

calculateHanoi(9, 4308);

module.exports = {
  calculateHanoi
};
