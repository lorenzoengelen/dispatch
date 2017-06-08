const express = require('express');
const router = express.Router();

const Order = require('../models/order');

router.route('/')
  .get((req, res) => {
    Order.readAll((err, order) => {
      if (err) res.send(err);
      res.send(order);
    });
  })
  .post((req, res) => {
    const {body} = req;
    Order.create(body, (err, order) => {
      if (err) res.send(err);
      res.send(order);
    });
  })
  .delete((req, res) => {
    Order.deleteAll((err, orders) => {
      if (err) res.send(err);
      res.send(orders);
    });
  });

router.route('/:id')
  .get((req, res) => {
    const {id} = req.params;
    Order.read(id, (err, order) => {
      if (err) res.send(err);
      res.send(order);
    });
  })
  .put((req, res) => {
    const {id} = req.params;
    const {body} = req;
    Order.update(id, body, (err, order) => {
      if (err) res.send(err);
      res.send(order);
    });
  })
  .delete((req, res) => {
    const {id} = req.params;
    Order.delete(id, (err, order) => {
      if (err) res.send(err);
      res.send(order);
    });
  });

module.exports = router;