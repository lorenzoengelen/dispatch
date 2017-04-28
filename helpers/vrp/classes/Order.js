class Order {
  constructor(id, x, y, q, e, l, s) {
    this.id = id || 0; // order ID
    this.x = x || 0; // longitude
    this.y = y || 0; // latitude
    this.q = q || 0; // demand
    this.e = e || 0; // earliest time
    this.l = l || 0; // latest time
    this.s = s || 0; // service time
  }
};

module.exports = Order;