const namesList = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = (namesList) => getFirstNames(namesList);
// console.log(namesList);

module.exports = getPeopleInCity;
