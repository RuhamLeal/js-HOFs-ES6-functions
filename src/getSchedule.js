const data = require('../data/zoo_data');

const { species, hours } = data;
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const reduceObject = {
  Monday: { officeHour: 0, exhibition: 0 },
  Tuesday: { officeHour: 0, exhibition: 0 },
  Wednesday: { officeHour: 0, exhibition: 0 },
  Thursday: { officeHour: 0, exhibition: 0 },
  Friday: { officeHour: 0, exhibition: 0 },
  Saturday: { officeHour: 0, exhibition: 0 },
  Sunday: { officeHour: 0, exhibition: 0 },
};

function filterAnimals(day) {
  return species.filter((e) => e.availability.includes(day) === true).map((e) => e.name);
}

function returnToGetSchedule2(day) {
  return days.reduce((acc, curr) => {
    acc[day] = {
      exhibition: filterAnimals(day),
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    }; return acc;
  }, {});
}

function returnToGetSchedule1() {
  return days.reduce((acc, curr) => {
    if (curr === 'Monday') {
      acc[curr].exhibition = 'The zoo will be closed!';
      acc[curr].officeHour = 'CLOSED';
      return acc;
    } acc[curr].exhibition = filterAnimals(curr);
    acc[curr].officeHour = `Open from ${hours[curr].open}am until ${hours[curr].close}pm`;
    return acc;
  }, reduceObject);
}

const returnSchedule1 = returnToGetSchedule1();
const mondaySchedule = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
const animals = species.map((e) => e.name);

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget) === true) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  } if (scheduleTarget === 'Monday') return mondaySchedule;
  if (days.includes(scheduleTarget) === true) return returnToGetSchedule2(scheduleTarget);
  return returnSchedule1;
}

module.exports = getSchedule;
