import calcMaxPopulationYear, {
  calcMaxPopulationByBirthYear,
} from './max-population';

const chai = require('chai');

const expect = chai.expect;

describe('max population', () => {
  const people = [
    { birth: 1880, death: 1920 },
    { birth: 1850, death: 1883 },
    { birth: 1921, death: 2010 },
  ];
  it('should calculate the year with the max population', () => {
    const actual = calcMaxPopulationYear(people);
    expect(actual.year).equals('1880');
    expect(actual.maxPop).equals(2);
  });
  it('should calculate the year with the max population', () => {
    const actual = calcMaxPopulationByBirthYear(people);
    expect(actual.year).equals(1880);
    expect(actual.maxPop).equals(2);
  });
});
