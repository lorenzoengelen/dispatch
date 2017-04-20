const Route = require('./Route');

class Solution {
  constructor(problem) {
    this.problem = problem;
    this.route = [];
    this.totalDistance = 0;
    this.totalCost = 0;
    this.mapOtoR = this._initMOtoR();
  }

  _initMOtoR() {
    let arr = [];
    for (let i = 0, len = this.problem.O.length; i < len; i++) {
      arr.push(-1);
    }
    return arr;
  }

  sequentialConstruction() {
    this.routes = []; // clear routes
    
    let M = 0; // M is number of vehicles used
    let unassigned = this.problem.O.length - 1;

    while (unassigned > 0) {
      let route = new Route(M); // route id (rid) equal to number of vehicles

      for (let i = 0, len = this.problem.O.length; i < len; i++) {
        if (this.problem.O[i].oid === 0) continue; // not adding depot
        if (this.mapOtoR[this.problem.O[i].oid] !== -1) continue;
        
        route.addOrder(this.problem.O[i]);
      }
      console.log(route);

      unassigned--;
    }

    console.log(this.problem.O);
  }
};

module.exports = Solution;