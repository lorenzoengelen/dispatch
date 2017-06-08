class Solution {
  constructor(problem) {
    this.problem = problem;
  }

  initialSolution() {
    let unusedVehicles = [];
    let unusedOrders = [];

    while (unusedVehicles.length && unusedOrders.length) {
      let route = new Route();

      let vehicle = Math.random();
      route.setVehicleInfo(vehicle);

      route.setStartDepot()
      route.setEndDepot()

      let insertAvailable = true;

      while (insertAvailable) {
        insertAvailable = false;
        let PotentialInsert;
        let bestInsert = Infinity;


      }

    }

  }

};

module.exports = Solution;