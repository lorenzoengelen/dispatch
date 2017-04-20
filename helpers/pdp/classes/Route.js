const w1 = 0.201;
const w2 = 0.7;
const w3 = 0.099;

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

  // private class methods
  _swap(a, b) {
    let tmp = a;
    a = b;
    b = tmp;
  }

  _update() {
    let D = 0;
    let TWV = 0;
    let CV = 0;

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
    if (this.updated) this._update();
    return this.cost;
  }


  _insertOrder(orderId) {
  }

  _removeOrder(orderId) {
  }

  addPickup(order) {
  }

  addDelivery(order) {
  }
  
  addOrder(order) {
    this.path = [...this.path, order.pid, order.did];
    this.updated = true;
  }

  hillClimbOptimization() {
    let oldCost = this.getCost();

    while (true) {
      let improved = false;

      for (let i = 0, len = this.path.length; i < len; i++) {
        for (let j = i + 1, len = this.path.length; j < len; j++) {
          if (this.orders[i] === this.orders[j]) break;

        }
      }

      if (!improved) break;
    } // end while

  } // end HC Algorithm

};

module.exports = Route;