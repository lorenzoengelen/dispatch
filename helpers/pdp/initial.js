const depotData = {
  location: { longitude: 0, latitude: 0 }
};

const tasksData = [{
  id: 1,
  pickup: { location: { longitude: 0, latitude: 1 } },
  delivery: { location: { longitude: 0, latitude: 3 } }
},{
  id: 2,
  pickup: { location: { longitude: 1, latitude: 5 } },
  delivery: { location: { longitude: 2, latitude: 7 } }
},{
  id: 3,
  pickup: { location: { longitude: 4, latitude: 10 } },
  delivery: { location: { longitude: 8, latitude: 10 } }
},{
  id: 4,
  pickup: { location: { longitude: 9, latitude: 9 } },
  delivery: { location: { longitude: 7, latitude: 7 } }
},{
  id: 5,
  pickup: { location: { longitude: 6, latitude: 5 } },
  delivery: { location: { longitude: 8, latitude: 2 } }
}];

// Construct an initial solution
// Based on Hosny & Mumford (2012)

// Distance class
class Distance {
  constructor() {
    this.table = {};
  }

  // private class methods
  _checkTable(nested, coords, i) {
    i = i || 0;
    let coord = coords[i];
    if (i === 3) {
      return nested[coord] === undefined ? nested[coord] = this._calculateDistance(coords[0], coords[1], coords[2], coords[3]) : nested[coord]; 
    } else {
      return this._checkTable(nested[coord] === undefined ? nested[coord] = {} : nested[coord], coords, ++i);
    }
  }

  _calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) 
      + Math.pow(Math.abs(y1 - y2), 2));
  }

  // public class methods
  getDistance(x1, y1, x2, y2) {
    return this._checkTable(this.table, [x1, y1, x2, y2]);
  }
};

// Route class
class Route {
  constructor(sequence) {
    this.sequence = sequence || [];
  }

  // private class methods
  _hillClimbingAlgorithm() {
    // Classical Hill-Climbing (HC) route-improvement heuristic

  }

  // public class methods
  insertTask(task) {
    let {id, pickup, delivery} = task;
    this.sequence = [...this.sequence, 
      {id: id, service: 'pickup', location: pickup.location}, 
      {id: id, service: 'delivery', location: delivery.location}];  
  }

  removeTask(id) {
    this.sequence = this.sequence.filter(el => {
      if (el.id !== id) return true;
      return false;
    });
  }
}

// Sequential Construction Algorithm
class SequentialConstruction extends Distance {
  constructor(depot, tasks) {
    super();
    this.depot = depot;
    this.originalTasks = tasks;
    this.unassignedTasks = this._sortTasks(tasks);
  }

  // private class methods
  _sortTasks(tasks) {
    // sorting tasks according to the distance from the depot (farthest first)
    return tasks.slice().sort((taskA, taskB) => {
      return this.getDistance(this.depot.location.longitude, this.depot.location.latitude, taskB.delivery.location.longitude, taskB.delivery.location.latitude) 
      - this.getDistance(this.depot.location.longitude, this.depot.location.latitude, taskA.delivery.location.longitude, taskA.delivery.location.latitude);
    });
  }

  // public class methods
  getRoutes() {

  }
};

var seq = new SequentialConstruction(depotData, tasksData);
console.log(seq);

const sequentialConstruction = (depot, tasks) => {

  let unassignedTasks = sortDelivery(depot, tasks);

  let vehicles = 0;
  let routes = [];

  while (unassignedTasks.length) {
    let route = [];
    vehicles++;

    for (let i = 0, len = unassignedTasks.length; i < len; i++) {
      route.push(unassignedTasks[i]);
      
      hillClimbing(route, (feasible, newRoute) => {
        if (!feasible) {
          route.pop();
        } else {
          route = newRoute
          unassignedTasks.shift();
          console.log(route);
        }
      });
    }

    routes.push(route);
  }

  // console.log(routes);
};




