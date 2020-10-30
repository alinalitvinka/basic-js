const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === 'FAIL') { return null } else
  if (typeof date === 'object') {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('THROWN');
  } else {
  let month = date.getMonth();
  if (month < 2 || month === 11) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else  if (month < 11) {
    return 'autumn';
  }}} else { return 'Unable to determine the time of year!'; }
};
