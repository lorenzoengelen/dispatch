const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Route = require('../helpers/pdp/classes/Route');

describe('Route Class', () => {
  let route = new Route(99);

  it('should have a value for route id (rid) property', () => {
    expect(route.rid).to.exist;
    expect(route.rid).to.equal(99);
  });

  it('should create an empty route path array (path) property', () => {
    expect(route.path).to.be.instanceof(Array);
    expect(route.path.length).to.equal(0);
  });

  it('should create an empty orders array (orders) property', () => {
    expect(route.orders).to.be.instanceof(Array);
    expect(route.orders.length).to.equal(0);
  });

  it('should have a value for updated (updated) property', () => {
    expect(route.updated).to.exist;
    expect(route.updated).to.equal(true);
  });

  it('should have a route duration (D) property', () => {
    expect(route.D).to.exist;
  });

  it('should have a time-window violation (TWV) property', () => {
    expect(route.TWV).to.exist;
  });

  it('should have a capacity violation (CV) property', () => {
    expect(route.CV).to.exist;
  });

  it('should have a route cost (cost) property', () => {
    expect(route.cost).to.exist;
  });
});