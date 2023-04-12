const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;//углерод-14

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //константу скорости реакции по ее периоду полураспада (5730 лет) по уравнению 3 : 
  const k = 0.693 / HALF_LIFE_PERIOD;//периода полураспада реакции первого порядка
  // time = ln ( N 0 / N ) / k;
  // N 0  - начальная активность, N - конечная активность
  if (typeof(sampleActivity) === 'string' && (+sampleActivity) > 0 && (+sampleActivity) < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
