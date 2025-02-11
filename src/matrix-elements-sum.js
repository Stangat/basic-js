const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  let itemLength = 0;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][j] === "number") {
        itemLength++;
      }
    }
  }
  itemLength = itemLength / matrix.length;

  for (let i = 0; i < itemLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
    }
  }

  for (let i = 0; i <= arr.length; i++) {
    let partOfArr = arr.splice(0, matrix.length);
    for (let j = 0; j < partOfArr.length; j++) {
      if (partOfArr[j] === 0 && partOfArr[j + 1]) {
        break;
      } else {
        sum += partOfArr[j];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
