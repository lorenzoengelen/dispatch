var express = require('express');
var router = express.Router();

var Request = require('../models/request');

router.route('/')
  .get(function(req, res) {
    res.send('this is the requests route');
  })
  .post(function(req, res) {
    var body = req.body;

    console.log(Request);

    Request.create(body, function(err) {
      res.send(err);
    });
  });

router.router('/:id')
  .get(function(req, res) {

  })
  .put(function(req, res) {

  })
  .delete(function(req, res) {

  });

module.exports = router;