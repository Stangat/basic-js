const { NotImplementedError } = require("../extensions/index.js");

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
  calculateDepth(arr) {
    function getDepth(a) {
      let count = 1;
      if (Array.isArray(a)) {
        count += Math.max(0, ...a.map((item) => getDepth(item)));
        return count;
      } else {
        return 0;
      }
    }
    return getDepth(arr);
  }
}

module.exports = {
  DepthCalculator,
};
