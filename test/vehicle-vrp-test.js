const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const Vehicle = require('../helpers/vrp/classes/Vehicle');

describe('Vehicle VRP Class', () => {
  let vehicle = new Vehicle(1, 2);

  it('should have a value for vehicle id (id) property', () => {
    expect(vehicle.id).to.equal(1);
  });

  it('should have a value for capacity (Q) property', () => {
    expect(vehicle.Q).to.equal(2);
  });
});