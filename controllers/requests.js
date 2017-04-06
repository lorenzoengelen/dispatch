var express = require('express');
var router = express.Router();

// var Request = require('../models/request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the requests route');
});

router.get('/new', function(req, res) {
  res.send('this is the requests/new route');
});

module.exports = router;