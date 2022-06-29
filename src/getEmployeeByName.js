const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => {
    const e = employee.firstName === employeeName || employee.lastName === employeeName;
    return e;
  });
}

module.exports = getEmployeeByName;
