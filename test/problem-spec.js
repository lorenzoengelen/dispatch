const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Problem = require('../helpers/pdp/classes/Problem');


describe('Problem Class', () => {
  
  let problem = new Problem();

  it('should have number of vehicles K property', () => {
    expect(problem.K).to.exist;
  });

  it('should have vehicle capacity Q property', () => {
    expect(problem.Q).to.exist;
  });

  it('should create an empty array of nodes N', () => {
    expect(problem.N).to.exist;
    expect(problem.N).to.be.empty;
  });

  it('should create an empty array of orders O', () => {
    expect(problem.O).to.exist;
    expect(problem.O).to.be.empty;
  });

  describe('loadProblem function', () => {
    it('should exist', () => {
      expect(problem.loadProblem()).be.function; 
    });

    it('should load a json file', () => {

    });
  });

});