const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (machine = true) {
    this.machine = machine;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('THROWN');
    } else {

    }
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('THROWN');
    } else {

    }
  }
}

module.exports = VigenereCipheringMachine;
