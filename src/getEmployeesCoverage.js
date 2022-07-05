const data = require('../data/zoo_data');

const { employees, species } = data;

function getAllEmployeesCoverages() {
  return employees.map((e) => {
    const obj = {
      id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: species.filter((specie) => e.responsibleFor.includes(specie.id))
        .map((specie) => specie.name),
      locations: species.filter((specie) => e.responsibleFor.includes(specie.id))
        .map((specie) => specie.location),
    };
    return obj;
  });
}

function verifyEmployee(employeeToVerify) {
  const ids = employees.map((e) => e.id);
  const names = employees.map((e) => e.firstName);
  const lastNames = employees.map((e) => e.lastName);
  const fullNames = names.concat(lastNames);
  const allData = ids.concat(fullNames);
  allData.push(undefined);
  return allData.includes(employeeToVerify);
}

function findEmployeeCoverage(employee) {
  const employeesCoverage = getAllEmployeesCoverages();
  const employeeID = employees.find((e) => e.id === employee.id || e.firstName === employee.name
  || e.lastName === employee.name).id;
  return employeesCoverage.find((e) => e.id === employeeID);
}

function getEmployeesCoverage(employee) {
  if (employee === undefined) return getAllEmployeesCoverages();
  if (verifyEmployee(employee.name) === false || verifyEmployee(employee.id) === false) {
    throw new Error('Informações inválidas');
  }
  return findEmployeeCoverage(employee);
}

module.exports = getEmployeesCoverage;
