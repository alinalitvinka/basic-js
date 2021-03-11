const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || +sampleActivity <= 0 || !isFinite(+sampleActivity) || +sampleActivity > MODERN_ACTIVITY) {
    return false;
  } else {
    t = Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/0.693;
  } return Math.ceil(t);
};
