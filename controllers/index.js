const express = require('express');
const router = express.Router();

const users = require('./users');
const requests = require('./requests');

router.use('/users', users);
router.use('/requests', requests);

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;