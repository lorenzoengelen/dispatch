const express = require('express');
const router = express.Router();

var Task = require('../models/task');

router.route('/')
  .get((req, res) => {
    Task.readAll((err, task) => {
      if (err) res.send(err);
      res.send(task);
    });
  })
  .post((req, res) => {
    const {body} = req;
    Task.create(body, (err, task) => {
      if (err) res.send(err);
      res.send(task);
    });
  })
  .delete((req, res) => {
    Task.deleteAll((err, tasks) => {
      if (err) res.send(err);
      res.send(tasks);
    });
  });

router.route('/:id')
  .get((req, res) => {
    const {id} = req.params;
    Task.read(id, (err, task) => {
      if (err) res.send(err);
      res.send(task);
    });
  })
  .put((req, res) => {
    const {id} = req.params;
    const {body} = req;
    Task.update(id, body, (err, task) => {
      if (err) res.send(err);
      res.send(task);
    });
  })
  .delete((req, res) => {
    const {id} = req.params;
    Task.delete(id, (err, task) => {
      if (err) res.send(err);
      res.send(task);
    });
  });

module.exports = router;