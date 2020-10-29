const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let rez = [];
  if (members !== null && members !== undefined) {
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      rez.push(members[i].trim()[0].toUpperCase());
    }
  }} return rez.sort().join('');
};
