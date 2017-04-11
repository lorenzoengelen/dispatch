const express = require('express');
const router = express.Router();

const tasks = require('./tasks');
const depots = require('./depots');

router.use('/tasks', tasks);
router.use('/depots', depots);

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;