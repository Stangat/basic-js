const { NotImplementedError } = require("../extensions/index.js");

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
  if (options.addition) {
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        str = str + options.addition;
      }
    } else {
      str = str + options.addition;
    }
  }
  if (options.repeatTimes) {
    let repStr = str;
    for (let i = 1; i < options.repeatTimes; i++) {
      repStr += `+${str}`;
    }
    if (options.separator) {
      repStr = str;
      for (let i = 1; i < options.repeatTimes; i++) {
        repStr += `${options.separator}${str}`;
      }
    }
    return repStr;
  } else {
    return str;
  }
}
module.exports = {
  repeater,
};
