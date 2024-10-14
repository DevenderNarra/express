const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = () => {
  return getFirstNames(peopleNames); // Get first names from the people names list
};

module.exports = getPeopleInCity;
