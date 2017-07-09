/*
 const people = [
 { birth: 1880, death: 1920 },
 { birth: 1850, death: 1883 },
 { birth: 1921, death: 2010 },
 ];
 find min,max, create array or hashtable 1880,2010
 find for each year count number of people alive
 //

 just check unique birth years for how many were alive

 */
const calcYearlyPopulation = people => (
  people.reduce((acc, person) => {
    for (let year = person.birth; year < person.death; year += 1) {
      if (acc[year] !== undefined) {
        acc[year] += 1;
      } else {
        acc[year] = 1;
      }
    }
    return acc;
  }, {})
);

const calcMaxYear = yearlyPopulation => (
  Object.keys(yearlyPopulation).reduce((acc, ann) => (
    yearlyPopulation[ann] > acc.maxPop
      ? { maxPop: yearlyPopulation[ann], year: ann }
      : acc
  ), { maxPop: 0, year: 0 })
);

const calcMaxPopulationYear = people => (
  calcMaxYear(calcYearlyPopulation(people))
);

const isAlive = (person, year) => person.birth <= year && person.death >= year;

const sum = (a, b) => a + b;

const calcHowManyAlive = (people, year) => (
  people.map(person => isAlive(person, year) ? 1 : 0)
    .reduce(sum, 0)
);

export const calcMaxPopulationByBirthYear = people => people.reduce((acc, person) => {
  const countAlive = calcHowManyAlive(people, person.birth);
  return (acc.maxPop < countAlive)
      ? { maxPop: countAlive, year: person.birth }
      : acc;
}, { maxPop: 0, year: 0 });

export default calcMaxPopulationYear;
