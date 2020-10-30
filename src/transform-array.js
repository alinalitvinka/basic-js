const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  if (Array.isArray(arr) == false) {
  throw new Error('THROWN');
  } else {
    if ((arr[0] === '--discard-prev' || arr[0] === '--double-prev') && (arr[arr.length-1] === '--discard-next' || arr[arr.length-1] === '--double-next')) {
      for (let i = 1; i < arr.length-1; i++) {
        if (arr[i] === '--discard-next' && arr[i+2] === '--double-prev') {
          i = i + 2;
        } else if (arr[i] === '--double-next' && arr[i+2] === '--discard-prev') {
          res.push(arr[i+1]);
          i = i + 2;
        } else if (arr[i] === '--discard-next' && arr[i+2] === '--discard-prev') {
          i = i + 2;
        } else if (arr[i] === '--discard-next') {
          i++;
        } else if (arr[i] === '--discard-prev') {
          res.pop();
        } else if (arr[i] === '--double-next') {
          res.push(arr[i+1]);
        } else if (arr[i] === '--double-prev') {
          res.push(arr[i-1]);
        } else {
          res.push(arr[i]);
        }}
    } else if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] === '--discard-next' && arr[i+2] === '--double-prev') {
          i = i + 2;
        } else if (arr[i] === '--double-next' && arr[i+2] === '--discard-prev') {
          res.push(arr[i+1]);
          i = i + 2;
        } else if (arr[i] === '--discard-next' && arr[i+2] === '--discard-prev') {
          i = i + 2;
        } else if (arr[i] === '--discard-next') {
          i++;
        } else if (arr[i] === '--discard-prev') {
          res.pop();
        } else if (arr[i] === '--double-next') {
          res.push(arr[i+1]);
        } else if (arr[i] === '--double-prev') {
          res.push(arr[i-1]);
        } else {
          res.push(arr[i]);
        }}
    } else if (arr[arr.length-1] === '--discard-next' || arr[arr.length-1] === '--double-next') {
      for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] === '--discard-next' && arr[i+2] === '--double-prev') {
          i = i + 2;
        } else if (arr[i] === '--double-next' && arr[i+2] === '--discard-prev') {
          res.push(arr[i+1]);
          i = i + 2;
        } else if (arr[i] === '--discard-next' && arr[i+2] === '--discard-prev') {
          i = i + 2;
        } else if (arr[i] === '--discard-next') {
          i++;
        } else if (arr[i] === '--discard-prev') {
          res.pop();
        } else if (arr[i] === '--double-next') {
          res.push(arr[i+1]);
        } else if (arr[i] === '--double-prev') {
          res.push(arr[i-1]);
        } else {
          res.push(arr[i]);
        }}
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next' && arr[i+2] === '--double-prev') {
          i = i + 2;
        } else if (arr[i] === '--double-next' && arr[i+2] === '--discard-prev') {
          res.push(arr[i+1]);
          i = i + 2;
        } else if (arr[i] === '--discard-next' && arr[i+2] === '--discard-prev') {
          i = i + 2;
        } else if (arr[i] === '--discard-next') {
          i++;
        } else if (arr[i] === '--discard-prev') {
          res.pop();
        } else if (arr[i] === '--double-next') {
          res.push(arr[i+1]);
        } else if (arr[i] === '--double-prev') {
          res.push(arr[i-1]);
        } else {
          res.push(arr[i]);
        }}
      } return res;
  } 
};