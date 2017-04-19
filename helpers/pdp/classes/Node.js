class Node {
  constructor(id) {
    this.nid = id; // node id (0 = depot)
    
    this.x;
    this.y;
    
    this.demand; // request size (+ for pickup, - for delivery)
    this.twOpen; //
    this.twClose; //
    this.service; // service time

    this.pid; // pickup id of sibling
    this.did; // delivery id of sibling
  }
};

module.exports = Node;