const express = require('express');
const router = express.Router();

var Request = require('../models/request');

router.route('/')
  .get((req, res) => {
    Request.readAll((err, request) => {
      res.send(request);
    });
  })
  .post((req, res) => {
    const {body} = req;
    Request.create(body, (err, request) => {
      res.send(request);
    });
  });

router.route('/:id')
  .get((req, res) => {
    const {id} = req.params;
    Request.read(id, (err, request) => {
      res.send(request);
    });
  })
  .put((req, res) => {
    const {id} = req.params;
    const {body} = req;
    Request.update(id, body, (err, request) => {
      res.send(request);
    });
  })
  .delete((req, res) => {
    const {id} = req.params;
    Request.delete(id, (err, request) => {
      res.send(request);
    });
  });

module.exports = router;