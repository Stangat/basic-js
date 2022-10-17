const { NotImplementedError } = require("../extensions/index.js");

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
  if (Array.isArray(arr)) {
    let result = [...arr];
    for (let i = 0; i < arr.length; i++) {
      if (result[i] === "--discard-next") {
        result[i + 2] === "--discard-prev" || result[i + 2] === "--double-prev"
          ? result.splice(i, 3)
          : result.splice(i, 2);
      }

      if (result[i] === "--discard-prev") {
        result[i - 1] === undefined
          ? result.splice(i, 1)
          : result.splice(i - 1, 2);
      }
      if (result[i] === "--double-next") {
        result[i + 1] === undefined
          ? result.splice(i, 1)
          : result.splice(i, 1, result[i + 1]);
      }
      if (result[i] === "--double-prev") {
        result[i - 1] === undefined
          ? result.splice(i, 1)
          : result.splice(i, 1, result[i - 1]);
      }
    }
    return result;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}
module.exports = {
  transform,
};
