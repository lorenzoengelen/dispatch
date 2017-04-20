const Node = require('./classes/Node');
const Order = require('./classes/Order');
const Problem = require('./classes/Problem');
const Route = require('./classes/Route');
const Solution = require('./classes/Solution');

const test = require('./test.json');

// compute an initial solution
exports.initPDP = initPDP = () => {
  
  const problem = new Problem();
  problem.loadProblem(test);
  console.log(problem);

  const solution = new Solution(problem);
};

// compute an optimized solution
exports.optimizePDP = optimizePDP = () => {
  // here comes the optimization function
  // GA or TS

};

initPDP();