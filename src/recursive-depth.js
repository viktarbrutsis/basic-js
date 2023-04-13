const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depthCount = 1, depthArray = []) {
    for (let i = 0; i < arr.length; i++) {
        // let depthCount = 1;
        if (Array.isArray(arr[i])) {
          depthCount++;
          depthArray.push(depthCount);
          this.calculateDepth(arr[i], depthCount, depthArray);
          //обнулить счетчик для нового массива в массиве
          depthCount = 1;
        }

      }

        return depthArray.sort((min, max) => max - min)[0];
    }
}
const instance = new DepthCalculator();
console.log(instance.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));

module.exports = {
  DepthCalculator
};
