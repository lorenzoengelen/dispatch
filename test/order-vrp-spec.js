const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Order = require('../helpers/vrp/classes/Order');

describe('Order VRP Class', () => {
  let order = new Order(1, 2, 3, 4, 5, 6, 7);

  it('should have a value for order id (id) property', () => {
    expect(order.id).to.equal(1);
  });

  it('should have a value for longitude (x) property', () => {
    expect(order.x).to.equal(2);
  });

  it('should have a value for latitude (y) property', () => {
    expect(order.y).to.equal(3);
  });

  it('should have a value for demand (q) property', () => {
    expect(order.q).to.equal(4);
  });

  it('should have a value for earliest time (e) property', () => {
    expect(order.e).to.equal(5);
  });

  it('should have a value for latest time (l) property', () => {
    expect(order.l).to.equal(6);
  });

  it('should have a value for service time (s) property', () => {
    expect(order.s).to.equal(7);
  });
});