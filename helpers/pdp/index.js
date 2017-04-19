const Node = require('./classes/Node');
const Order = require('./classes/Order');
const Problem = require('./classes/Problem');
const Route = require('./classes/Route');
const Solution = require('./classes/Solution');

var problem = new Problem();
problem.loadProblem();

// for (var i = 0; i < 5; i++) {
//   for (var j = i + 1; j < 5; j++) {
//     if (i === j) break;
//     console.log('i:', i, 'and j:', j);
//   }
// }