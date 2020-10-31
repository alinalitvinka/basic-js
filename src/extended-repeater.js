const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  let addStr = [];
  let sep = '';
  let addSep = '';
  if (str === null) {
    str = 'null';
  }
  if (options.addition === null) {
    options.addition = 'null';
  }
  if (options.separator === undefined) {
    sep = '+';
  } else {
    sep += options.separator;
  }
  if (options.additionSeparator === undefined) {
    addSep = '|';
  } else {
    addSep += options.additionSeparator;
  } 
  if (options.additionRepeatTimes !== undefined) {
    if (options.additionRepeatTimes === 1) {
      addStr.push(options.addition);
    } else {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        addStr.push(options.addition);
        addStr.push(addSep);
      } addStr.pop(); 
    }
  } else {
    addStr.push(options.addition);
  }
  if (options.repeatTimes !== undefined) {
    if (options.repeatTimes === 1) {
      result.push(str);
      result.push(addStr.join(''));
      return result.join('');
    } else {
      for (let i = 0; i < options.repeatTimes; i++) {
        result.push(str);
        result.push(addStr.join(''));
        result.push(sep);
      }
      result.pop();
      return result.join('');
    }
  } else {
    result.push(str);
    result.push(addStr.join(''));
    return result.join('');
  }
};
  