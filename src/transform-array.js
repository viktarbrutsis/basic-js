const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  let result = [...arr];
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next') {
      result.splice(i, 2)
    }
    else if (result[i] === '--discard-prev' && result[ i - 1] !== undefined) {
      result.splice(i - 1, 2)
    }
    else if (result[i] === '--discard-prev' && !result[ i - 1]) {
      result.splice(i, 1)
    }
    else if (result[i] === '--double-next' && result[i + 1] !== undefined) {
      result.splice(i, 1, arr[i + 1])
    }
    else if (result[i] === '--double-next' && !result[i + 1]) {
      result.splice(i, 1)
    }
    else if (result[i] === '--double-prev' && result[ i - 1] !== undefined) {
      result.splice(i, 1, arr[i - 1])
    }
   else  if (result[i] === '--double-prev' && !result[ i - 1]) {
      result.splice(i, 1)
    }
  }

  console.log(result);
  console.log(arr);
  return result;
}

transform([ 1, 2, 3, '--double-prev', 4, 5 ]);

module.exports = {
  transform
};
