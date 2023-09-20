const peopleName = require("../country/state/city/index.js");
const getFirstName = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleName) => {
  return getFirstName(peopleName);
};

module.exports = getPeopleInCity;
