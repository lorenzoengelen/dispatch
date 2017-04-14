class Route {
  constructor(id) {
    this.rid = id;
    
    this.path = []; // node ids in path
    this.orders = []; // order ids associated with nodes
    
    this.updated = true;
    
    this.D = 0; // route duration
    this.TWV = 0; // time-window violations
    this.CV = 0; // capacity violation
    this.cost = 0; 

    this.tTWV = 0; // test time-window violations
    this.tCV = 0; // test capacity violations
  }

  update() {
    let D = 0;
    let TWV = 0;
    let CV = 0;

    const w1 = 0.201;
    const w2 = 0.7;
    const w3 = 0.099;

    let q = 0; // used capacity

    for (let i = 0, len = this.path.length; i < len; i++) {
      // do some stuff here
    }

    this.D = D;
    this.TWV = TWV;
    this.CV = CV;


    this.cost = w1 * D + w2 * TWV + w3 * CV;

    this.updated = false;
  }

  testPath(path) {
  }

  getCost() {
    if (this.updated) {

    }
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