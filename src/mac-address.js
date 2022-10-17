const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-").map((item) => item.toLowerCase());
  let arrToStr = arr.join("-");
  let compArr = arr
    .map((item) => parseInt(item, 16).toString(16))
    .map((item) => (item === "0" ? (item = item + "0") : item));
  let compArrToStr = compArr.join("-");
  return arrToStr === compArrToStr ? true : false;
}

module.exports = {
  isMAC48Address,
};
