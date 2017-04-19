const chai = require('chai');
const chaiSorted = require('chai-sorted');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

chai.use(chaiSorted);

const Problem = require('../helpers/pdp/classes/Problem');
const Node = require('../helpers/pdp/classes/Node');
const Order = require('../helpers/pdp/classes/Order');
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
      let len = json.N.length;
      let r = Math.floor(Math.random() * len);
      expect(problem.N).to.have.lengthOf(len);
      expect(problem.N[r]).to.be.an.instanceof(Node);
      expect(problem.N[r].nid, 'node id').to.equal(json.N[r].nid);
      expect(problem.N[r].x, 'x location').to.equal(json.N[r].x);
      expect(problem.N[r].y, 'y location').to.equal(json.N[r].y);
      expect(problem.N[r].demand, 'demand quantity').to.equal(json.N[r].demand);
      expect(problem.N[r].twOpen, 'earliest time window').to.equal(json.N[r].twOpen);
      expect(problem.N[r].twClose, 'latest time window').to.equal(json.N[r].twClose);
      expect(problem.N[r].service, 'service time').to.equal(json.N[r].service);
      expect(problem.N[r].pid, 'pickup id').to.equal(json.N[r].pid);
      expect(problem.N[r].did, 'delivery id').to.equal(json.N[r].did);
    });

    it('should create a sorted array of orders O (including depot)', () => {
      let len = json.N.length / 2;
      let r = Math.floor(Math.random() * len);
      expect(problem.O).to.have.lengthOf(Math.ceil(len));
      expect(problem.O[r]).to.be.an.instanceof(Order);
      expect(problem.O[r].oid, 'order id').to.exist;
      expect(problem.O[r].pid, 'pickup id').to.exist;
      expect(problem.O[r].did, 'delivery id').to.exist;
      expect(problem.O[r].distD, 'distance depot to delivery location').to.exist;
      expect(problem.O).to.be.sortedBy('distD');
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

  describe('_getNodeDistance method', () => {
    it('should return the Euclidean distance', () => {
      let node1 = new Node();
      let node2 = new Node();
      node1.setXY(5, 5);
      node2.setXY(6, 6);
      expect(problem._getNodeDistance(node1, node2)).to.equal(Math.sqrt(2));

      node2.setXY(3, 28);
      expect(problem._getNodeDistance(node1, node2)).to.equal(Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)));
    });
  }); // distance method

}); // Problem Class