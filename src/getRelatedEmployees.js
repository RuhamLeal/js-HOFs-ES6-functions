const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const names = employees.filter((element) => element.managers.includes(managerId) === true);
    return names.map((element) => `${element.firstName} ${element.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
