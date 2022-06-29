const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  if (ids.length === 1) return species.filter((element) => element.id === ids[0]);
  return species.filter((element, i) => element.id === ids[i]);
}

module.exports = getSpeciesByIds;
