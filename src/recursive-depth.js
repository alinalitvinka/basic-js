const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let depth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let n = this.calculateDepth(item);
        if (n > count) {
          count = n;
        }
      }
    } 
    depth += count;
    return depth;
  }  
};