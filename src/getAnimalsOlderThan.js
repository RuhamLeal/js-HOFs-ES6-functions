const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.filter((Eanimal) => Eanimal.name === animal).map((elementAnimal) =>
    elementAnimal.residents.every((e) => e.age >= age))[0];
}

console.log(getAnimalsOlderThan('lions', 1));

module.exports = getAnimalsOlderThan;
