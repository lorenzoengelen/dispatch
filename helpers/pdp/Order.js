class Order {
  constructor(id) {
    this.oid = id;
    this.pid;
    this.did;

    this.distP; // distance depot - pickup location
    this.distD; // distance depot - delivery location
  }
};

export default Order;