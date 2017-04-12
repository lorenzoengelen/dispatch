const depotData = {
  location: { longitude: 0, latitude: 0 }
};

const tasksData = [{
  _id: 1,
  pickup: { location: { longitude: 0, latitude: 1 } },
  delivery: { location: { longitude: 0, latitude: 3 } }
},{
  _id: 2,
  pickup: { location: { longitude: 1, latitude: 5 } },
  delivery: { location: { longitude: 2, latitude: 7 } }
},{
  _id: 3,
  pickup: { location: { longitude: 4, latitude: 10 } },
  delivery: { location: { longitude: 8, latitude: 10 } }
},{
  _id: 4,
  pickup: { location: { longitude: 9, latitude: 9 } },
  delivery: { location: { longitude: 7, latitude: 7 } }
},{
  _id: 5,
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

  insertTask(task) {
    let {id, pickup, delivery} = task;
    this.sequence = [...this.sequence, 
      {id: _id, service: 'pickup', location: pickup.location}, 
      {id: _id, service: 'delivery', location: delivery.location}];  
  }

  removeTask(id) {
    this.sequence = this.sequence.filter(el => {
      if (el.id !== id) return true;
      return false;
    });
  }
}

// Depot object
const Depot = function(depot, tasks) {
  this.depot = depot;
  this.tasks = tasks;
  this.unassignedTasks = this.sortTasks();
}

Depot.prototype.sortTasks = function() {
  // Sort tasks according to the distance from the depot to delivery location (farthest first)
  return this.tasks.sort((taskA, taskB) => {
    return getDistance(this.depot.location, taskB.delivery.location) - getDistance(this.depot.location, taskA.delivery.location);
  });
};

const getDistance = (locationA, locationB) => {
  // Get distance of coordinate system
  return Math.sqrt(Math.pow(Math.abs(locationA.longitude - locationB.longitude), 2) 
    + Math.pow(Math.abs(locationA.latitude - locationB.latitude), 2));
};

// Classical Hill-Climbing (HC) route-improvement heuristic
const hillClimbing = (route, cb) => {
  return cb(true, route);
};

// Sequential construction algorithm
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




