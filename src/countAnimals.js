const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  } if (animal.sex === undefined) {
    return species.find((e) => e.name === animal.specie).residents.length;
  } return species.find((e) => e.name === animal.specie).residents.reduce((acc, curr) => {
    if (animal.sex === curr.sex) return acc + 1;
    return acc;
  }, 0);
}

module.exports = countAnimals;
