const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Order = require('../helpers/pdp/classes/Order');

describe('Order Class', () => {
  let order = new Order(1, 2, 3, 4);

  it('should have a value for order id (oid) property', () => {
    expect(order.oid).to.equal(1);
  });

  it('should have a value for pickup id (pid) property', () => {
    expect(order.pid).to.equal(2);
  });

  it('should have a value for delivery id (did) property', () => {
    expect(order.did).to.equal(3);
  });

  it('should have a value for distance depot - delivery location (distD) property', () => {
    expect(order.distD).to.equal(4);
  });
});