const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1, ++count);
    } else if (arr[i] !== arr[i - 1]) {
      count = 1;
    }
  }
  return arr
    .filter(
      (item, index) =>
        (typeof arr[index] === "number" &&
          typeof arr[index + 1] === "string") ||
        typeof arr[index] === "string"
    )
    .join("");
}

module.exports = {
  encodeLine
};
