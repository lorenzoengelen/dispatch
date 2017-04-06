var express = require('express');
var router = express.Router();

var Request = require('../models/request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the requests route');
});

router.get('/new', function(req, res) {
  res.send('this is the requests/new route');
});

router.post('/new', function(req, res) {
  var body = req.body;

  console.log(Request);

  Request.create(body, function(err) {
    res.send(err);
  });
});

module.exports = router;