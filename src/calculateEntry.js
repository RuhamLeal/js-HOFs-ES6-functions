const data = require('../data/zoo_data');

const { prices } = data;

/* const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
      return acc;
    } if (curr.age >= 18 && curr.age < 50) {
      acc.adult += 1;
      return acc;
    } if (curr.age >= 50) {
      acc.senior += 1;
      return acc;
    } return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const howManyPeople = [countEntrants(entrants)];
  return howManyPeople.reduce((acc, curr) => {
    const som = (curr.child * prices.child) + (curr.adult * prices.adult)
    + (curr.senior * prices.senior);
    return acc + som;
  }, 0);
}

module.exports = { calculateEntry, countEntrants };
