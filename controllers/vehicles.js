const express = require('express');
const router = express.Router();

const Vehicle = require('../models/vehicle');

router.route('/')
  .get((req, res) => {
    Vehicle.readAll((err, vehicles) => {
      if (err) res.send(err);
      res.send(vehicles);
    });
  })
  .post((req, res) => {
    const {body} = req;
    Vehicle.create(body, (err, vehicle) => {
      if (err) res.send(err);
      res.send(vehicle);
    });
  })
  .delete((req, res) => {
    Vehicle.deleteAll((err, vehicles) => {
      if (err) res.send(err);
      res.send(vehicles);
    });
  });

router.route('/:id')
  .get((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

module.exports = router;