class Node {
  constructor(nid, x, y, demand, twOpen, twClose, service, pid, did) {
    this.nid = nid; // node id (0 = depot)
    
    this.x = x;
    this.y = y;
    
    this.demand = demand; // request size (+ for pickup, - for delivery)
    this.twOpen = twOpen; //
    this.twClose = twClose; //
    this.service = service; // service time

    this.pid = pid; // pickup id of sibling
    this.did = did; // delivery id of sibling
  }
};

module.exports = Node;