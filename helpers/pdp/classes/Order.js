class Order {
  constructor(oid, pid, did, distD) {
    this.oid = oid;
    this.pid = pid;
    this.did = did;

    this.distP; // distance depot - pickup location
    this.distD = distD; // distance depot - delivery location
  }
};

module.exports = Order;
