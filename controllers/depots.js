const express = require('express');
const router = express.Router();

var Depot = require('../models/depot');

router.route('/')
  .get((req, res) => {
    Depot.read((err, depot) => {
      if (err) res.send(err);
      res.send(depot);
    });
  })
  .post((req, res) => {
    const {body} = req;
    Depot.create(body, (err, depot) => {
      if (err) res.send(err);
      res.send(depot);
    });
  })
  .put((req, res) => {
    const {body} = req;
    Depot.update(body, (err, depot) => {
      if (err) res.send(err);
      res.send(depot);
    });
  })
  .delete((req, res) => {
    Depot.delete((err, depots) => {
      if (err) res.send(err);
      res.send(depots);
    });
  });

module.exports = router;