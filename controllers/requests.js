var express = require('express');
var router = express.Router();

var Request = require('../models/request');

router.route('/')
  .get(function(req, res) {
    Request.readAll(function(err, request) {
      res.send(request);
    });
  })
  .post(function(req, res) {
    var body = req.body;
    Request.create(body, function(err, request) {
      res.send(request);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    var id = req.params.id;
    Request.read(id, function(err, request) {
      res.send(request);
    });
  })
  .put(function(req, res) {
    var id = req.params.id;
    var body = req.body;
    Request.update(id, body, function(err, request) {
      res.send(request);
    });
  })
  .delete(function(req, res) {
    var id = req.params.id;
    Request.delete(id, function(err, request) {
      res.send(request);
    });
  });

module.exports = router;