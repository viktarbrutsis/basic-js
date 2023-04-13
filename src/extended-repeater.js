const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const result = [];
  const string =[];
  const subString = [];
  let resSub = '';
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  console.log(options.additionRepeatTimes);
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    subString.push(String(options.addition));
  }
  resSub = subString.join(`${options.additionSeparator}`);
  for (let j = 0; j < options.repeatTimes; j++) {
    string.push(String(str) + resSub);
  }
  let resStr = string.join(`${options.separator}`);
  // console.log(resStr);
  return resStr;
}

console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));

module.exports = {
  repeater
};
