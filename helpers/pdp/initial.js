// Construct an initial solution
// Based on Hosny & Mumford (2012)

// Route object
const Route = function(sequence) {
  this.sequence = sequence || [];
};

Route.prototype.insert = function(task) {
  let {_id, pickup, delivery} = task;
  this.sequence.push({ id: `p${_id}`, location: pickup.location });
  this.sequence.push({ id: `d${_id}`, location: delivery.location });
};

// Depot object
const Depot = function(depot, tasks) {
  this.depot = depot;
  this.tasks = tasks;
  this.unassignedTasks = this.sortTasks();
}

Depot.prototype.sortTasks = function() {
  return this.tasks.sort((taskA, taskB) => {
    return getDistance(this.depot.location, taskB.delivery.location) - getDistance(this.depot.location, taskA.delivery.location);
  });
};

const getDistance = (locationA, locationB) => {
  return Math.sqrt(Math.pow(Math.abs(locationA.longitude - locationB.longitude), 2) 
    + Math.pow(Math.abs(locationA.latitude - locationB.latitude), 2));
};

// Sort tasks according to the distance from the depot to delivery location (farthest first)
const sortDelivery = (depot, tasks) => {
  return tasks.sort((taskA, taskB) => {
    return Math.sqrt(Math.pow(Math.abs(depot.location.longitude - taskB.delivery.location.longitude), 2) 
      + Math.pow(Math.abs(depot.location.latitude - taskB.delivery.location.latitude), 2)) 
    - Math.sqrt(Math.pow(Math.abs(depot.location.longitude - taskA.delivery.location.longitude), 2) 
      + Math.pow(Math.abs(depot.location.latitude - taskA.delivery.location.latitude), 2))
  });
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

// sequentialConstruction(depot, tasks);

var route = new Route();

var depot = new Depot(depotData, tasksData);
console.log(depot);










