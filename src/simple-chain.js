const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  resArr: [],
  getLength() {
    return this.resArr.length;
  },
  addLink(value) {
    value === undefined
      ? this.resArr.push(`( )`)
      : this.resArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      Number.isInteger(position) &&
      position <= this.resArr.length &&
      position !== 0 &&
      Math.sign(position) !== -1
    ) {
      this.resArr.splice(position - 1, 1);
    } else {
      this.resArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.resArr.reverse();
    return this;
  },
  finishChain() {
    let resultString = this.resArr.join("~~");
    this.resArr = [];
    return resultString;
  },
};

module.exports = {
  chainMaker,
};
