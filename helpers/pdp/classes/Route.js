class Route {
  constructor(id) {
    this.rid = id;
    
    this.path = []; // node ids in path
    this.orders = []; // order ids associated with nodes
    
    this.updated = false;
    
    this.D = 0; // route duration
    this.TWV = 0; // time-window violations
    this.CV = 0; // capacity violation
    this.cost = 0; 

    this.tTWV = 0; // test time-window violations
    this.tCV = 0; // test capacity violations
  }

  update() {
  }

  testPath(path) {
  }

  getCost() {
  }

  addOrder(order) {
  }

  insertOrder(orderId) {
  }

  removeOrder(orderId) {
  }

  addPickup(order) {
  }

  addDelivery(order) {
  }

  hillClimbOptimization() {
  }

  dump() {
  }

};

module.exports = Route;