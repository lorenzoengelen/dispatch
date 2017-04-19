const Node = require('./Node');
const Order = require('./Order');

const w1 = 0.201; // route duration weight
const w2 = 0.7; // time violations weight
const w3 = 0.099; // capacity violations weight

class Problem {
  constructor() {
    this.K = 0; // number of vehicles
    this.Q = 0; // vehicle capacity

    this.N = []; // array of nodes
    this.O = []; // array of orders
  }

  // private class methods
  _makeOrders() {
    if (this._getNodeCount() === 0) return;
    let oid = 0;
    let depot = new Node();
    depot.setXY(0, 0);

    this.N.forEach((n, i) => {
      if (n.pid === 0) {
        let dist = this._getNodeDistance(depot, n);
        let order = new Order(oid++, n.nid, n.did, dist);
        this.O.push(order);
      }
    });

    // sort according to distance from depot
    this.O.sort((a, b) => {
      return b.distD < a.distD;
    })
  }

  _getNodeCount() {
    return this.N.length;
  }

  _getOrderCount() {
    return this.O.length;
  }

  _getNodeDistance(n1, n2) {
    return Math.sqrt(Math.pow(n1.x - n2.x, 2) + Math.pow(n1.y - n2.y, 2));
  }

  // public class methods
  loadProblem(file) {
    if (!file) return;
    this.K = file.K;
    this.Q = file.Q;
    file.N.forEach(n => {
      let node = new Node(n.nid, n.x, n.y, n.demand, n.twOpen, n.twClose, n.service, n.pid, n.did);
      this.N.push(node);
    });

    this._makeOrders();
  }

}

module.exports = Problem;