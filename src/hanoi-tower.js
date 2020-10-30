const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {};
  let turns = Math.pow(2, disksNumber) - 1;
  res.turns = turns;
  res.seconds = Math.floor(turns / turnsSpeed * 3600);  
  return res;
};
