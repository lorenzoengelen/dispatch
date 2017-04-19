const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Problem = require('../helpers/pdp/classes/Problem');
const Node = require('../helpers/pdp/classes/Node');
const json = require('./problem-spec.json');

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

    let problem = new Problem();

    it('should exist', () => {
      expect(problem.loadProblem()).be.function; 
    });

    it('should parse K of json file', () => {
      problem.loadProblem(json);
      expect(problem.K).to.equal(json.K);
    })

    it('should parse Q of json file', () => {
      expect(problem.Q).to.equal(json.Q);
    })

    it('should parse nodes of json file', () => {
      expect(problem.N).to.have.lengthOf(json.N.length);
      expect(problem.N[0]).to.be.an.instanceof(Node);
      expect(problem.N[0].nid, 'node id').to.equal(json.N[0].nid);
      expect(problem.N[0].x, 'x location').to.equal(json.N[0].x);
      expect(problem.N[0].y, 'y location').to.equal(json.N[0].y);
      expect(problem.N[0].demand, 'demand quantity').to.equal(json.N[0].demand);
      expect(problem.N[0].twOpen, 'earliest time window').to.equal(json.N[0].twOpen);
      expect(problem.N[0].twClose, 'latest time window').to.equal(json.N[0].twClose);
      expect(problem.N[0].service, 'service time').to.equal(json.N[0].service);
      expect(problem.N[0].pid, 'pickup id').to.equal(json.N[0].pid);
      expect(problem.N[0].did, 'delivery id').to.equal(json.N[0].did);
    });

  }); // loadProblem function

}); // Problem Class