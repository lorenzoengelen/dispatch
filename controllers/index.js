const express = require('express');
const router = express.Router();

const depots = require('./depots');
const orders = require('./orders');

router.use('/depots', depots);
router.use('/orders', orders);

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;