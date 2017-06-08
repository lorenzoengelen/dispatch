const Order = require('./classes/Order');
const Problem = require('./classes/Problem');
const Solution = require('./classes/Solution');

// contruct an initial route
exports.initVRP = initVRP = (cb) => {

  const problem = new Problem();
  problem.loadProblem();

  const solution = new Solution(problem);
  solution.initialSolution();
};

// optimize the contructed route
exports.optimizeVRP = optimizeVRP = () => {

  initVRP(() => {

  });
};

console.log('lets optimize');