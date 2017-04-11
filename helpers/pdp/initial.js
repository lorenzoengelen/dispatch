// Construct an initial solution
// Based on Hosny & Mumford (2012)

// Route object
const Route = function(sequence) {
  this.sequence = sequence || [];
};

Route.prototype.insertTask = function(task) {
  let {_id, pickup, delivery} = task;
  this.sequence = [...this.sequence, 
    {id: _id, service: 'pickup', location: pickup.location}, 
    {id: _id, service: 'delivery', location: delivery.location}];
};

Route.prototype.removeTask = function(id) {
  this.sequence = this.sequence.filter(el => {
    if (el.id !== id) return true;
    return false;
  });
};

Route.prototype.calculateCost = function() {

};

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

// Distances object
const Distances = function() {
  this.table = {};
};

Distances.prototype.getDistance = function(locationA, locationB) {
  const lookup = (table, coords) => {
    if (coords.length === 1) {
      if (table[coords[0]] === undefined) {
        table[coords[0]] = Math.sqrt(Math.pow(Math.abs(locationA.longitude - locationB.longitude), 2) 
          + Math.pow(Math.abs(locationA.latitude - locationB.latitude), 2));
      }
    } else {
      let coord = coords.shift();
      table[coord] = lookup(table[coord] === undefined ? {} : table[coord], coords);
    }
    return table;
  }

  var dist = lookup(this.table, [locationA.longitude, locationA.latitude, locationB.longitude, locationB.latitude]);
  return this.table[locationA.longitude][locationA.latitude][locationB.longitude][locationB.latitude];
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

var distances = new Distances();
console.log(distances.getDistance({longitude: 0, latitude: 0}, {longitude: 9, latitude: 9}));
console.log(distances);
console.log(distances.getDistance({longitude: 0, latitude: 0}, {longitude: 9, latitude: 9}));
console.log(distances.getDistance({longitude: 2, latitude: 2}, {longitude: 10, latitude: 10}));
console.log(distances);








