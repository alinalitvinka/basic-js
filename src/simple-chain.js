const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.push(arr.length + 1);
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position !== 0 && position !== this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr.length = 0;
      throw new Error('THROWN');
    }  
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr.length = 0;
    return result;    
  }
};

module.exports = chainMaker;
