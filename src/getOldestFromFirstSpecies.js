const data = require('../data/zoo_data');

const { species, employees } = data;

const olderAge = (animals) => animals.reduce((acc, curr) => {
  if (acc < curr.age) {
    let soma = 0;
    soma = curr.age - acc;
    return acc + soma;
  } return acc;
}, 0);

function getOldestFromFirstSpecies(id) {
  const animalID = employees.find((e) => e.id === id).responsibleFor[0];
  const animals = species.find((e) => e.id === animalID).residents;
  const returnOlderAge = olderAge(animals);
  const olderAnimal = animals.find((e) => e.age === returnOlderAge);
  return [olderAnimal].reduce((acc, curr) => {
    acc.push(curr.name, curr.sex, curr.age);
    return acc;
  }, []);
}

module.exports = getOldestFromFirstSpecies;
