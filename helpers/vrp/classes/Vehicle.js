class Vehicle {
  constructor(id, Q) {
    this.id = id || 0; // vehicle id
    this.Q = Q || 0; // vehicle capacity
  }
};

module.exports = Vehicle;