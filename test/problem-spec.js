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

  describe('loadProblem method', () => {
    let problem = new Problem();

    it('should exist', () => {
      expect(problem.loadProblem()).be.function; 
    });

    it('should parse number of vehicles K of json file', () => {
      problem.loadProblem(json);
      expect(problem.K).to.equal(json.K);
    })

    it('should parse vehicle capacity Q of json file', () => {
      expect(problem.Q).to.equal(json.Q);
    })

    it('should parse nodes N of json file', () => {
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

    it('should create an array orders O', () => {
      
    });
  }); // loadProblem function

  describe('_getNodeCount method', () => {
    let problem = new Problem();

    it('should exist', () => {
      expect(problem._getNodeCount()).be.function;
    });

    it('should return #nodes', () => {
      problem.N.push(new Node());
      problem.N.push(new Node());
      expect(problem._getNodeCount()).to.equal(2);
    });
  }); // getNodeCount method

  describe('_getOrderCount method', () => {
    let problem = new Problem();

    it('should exist', () => {
      expect(problem._getOrderCount()).be.function;
    });

    it('should return #orders', () => {
      problem.O.push(1);
      problem.O.push(2);
      problem.O.push(3);
      expect(problem._getOrderCount()).to.equal(3);
    });
  }); // getOrderCount method

  describe('_distance method', () => {
    it('should return the Euclidean distance', () => {
      let node1 = new Node();
      let node2 = new Node();
      node1.setXY(5, 5);
      node2.setXY(6, 6);
      expect(problem._distance(node1, node2)).to.equal(Math.sqrt(2));

      node2.setXY(3, 28);
      expect(problem._distance(node1, node2)).to.equal(Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)));
    });
  });

}); // Problem Class