const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Solution = require('../helpers/pdp/classes/Solution');
const Problem = require('../helpers/pdp/classes/Problem');
const json = require('./problem-spec.json');

describe('Solution Class', () => {
  let problem = new Problem();
  problem.loadProblem(json);
  
  let solution = new Solution(problem);

  it('should have a value for problem (problem) property', () => {
    expect(solution.problem).to.exist;
    expect(solution.problem).to.be.an.instanceof(Problem);
  });

  it('should have a route (route) property', () => {
    expect(solution.route).to.exist;
  });

  it('should have a total distance (totalDistance) property', () => {
    expect(solution.totalDistance).to.exist;
  });

  it('should have a total cost (totalCost) property', () => {
    expect(solution.totalCost).to.exist;
  });

  describe('sequentialConstruction method', () => {
    it('should have and do something', () => {

    });
  });
});