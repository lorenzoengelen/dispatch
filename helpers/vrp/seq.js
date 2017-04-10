// Sequential Construction Algorithm (Hosny & Mumford, 2012);

 // can be randomized for Genetic Algorithm
const sortTasks = tasks => {

};

// Hill-Climbing route-improvement heuristic (HC)
const hc = (route, cb) => {
  cb(true, route)
};

// Sequential Construction Algorithm
const seq = tasks => {

  let unassignedTasks = tasks;
  let assignedTasks = [];
  let vehicles = 0;
  let routes = [];

  while (assignedTasks.length < unassignedTasks.length) {
    
    let route = [];

    for (let i = 0, len = unassignedTasks.length; i < len; i++) {
      route.push(unassignedTasks.shift());
      hc(route, (feasible, route) => {
        if (feasible) {

        } else {

        }
      });

    }

    routes.push(route);
    
  }

  console.log(routes);

};

var arr = [{
  tsk: 'a'
},{
  tsk: 'b'
},{
  tsk: 'c'
}];

seq(arr);