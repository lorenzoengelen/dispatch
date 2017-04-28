const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Depot = require('../helpers/vrp/classes/Depot');

describe('Depot VRP Class', () => {
  let depot = new Depot(1, 2, 3, 4, 5, 6, 7);

  it('should have a value for depot id (id) property', () => {
    expect(depot.id).to.equal(1);
  });

  it('should have a value for longitude (x) property', () => {
    expect(depot.x).to.equal(2);
  });

  it('should have a value for latitude (y) property', () => {
    expect(depot.y).to.equal(3);
  });

  it('should have a value for demand (q) property', () => {
    expect(depot.q).to.equal(4);
  });

  it('should have a value for earliest time (e) property', () => {
    expect(depot.e).to.equal(5);
  });

  it('should have a value for latest time (l) property', () => {
    expect(depot.l).to.equal(6);
  });

  it('should have a value for service time (s) property', () => {
    expect(depot.s).to.equal(7);
  });
});