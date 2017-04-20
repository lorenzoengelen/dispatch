const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Node = require('../helpers/pdp/classes/Node');

describe('Node Class', () => {
  let node = new Node(1, 2, 3, 4, 5, 6, 7, 8, 9);

  it('should have a value for node id (nid) property', () => {
    expect(node.nid).to.equal(1);
  });

  it('should have a value for longitude (x) property', () => {
    expect(node.x).to.equal(2);
  });

  it('should have a value for latitude (y) property', () => {
    expect(node.y).to.equal(3);
  });

  it('should have a value for demand (demand) property', () => {
    expect(node.demand).to.equal(4);
  });

  it('should have a value for ealiest time window (twOpen) property', () => {
    expect(node.twOpen).to.equal(5);
  });

  it('should have a value for latest time window (twClose) property', () => {
    expect(node.twClose).to.equal(6);
  });

  it('should have a value for service time (service) property', () => {
    expect(node.service).to.equal(7);
  });

  it('should have a value for pickup id of sibling (pid) property', () => {
    expect(node.pid).to.equal(8);
  });

  it('should have a value for delivery id of sibling (did) property', () => {
    expect(node.did).to.equal(9);
  });
});