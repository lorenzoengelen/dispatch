const db = require('../db/task');

exports.create = (body, cb) => {
  
  const createTask = (newTask, callback) => {
    let {load, pickup, delivery} = newTask;
    db.create({load, pickup, delivery}, (err, task) => {
      if (err) return cb(err);
      callback(task);
    });
  };

  // save multiple tasks
  if (Array.isArray(body)) {
    let newTasks = [];
    body.forEach((el, index) => {
      if (index + 1 === body.length) {
        createTask(el, newTask => {
          newTasks.push(newTask);
          cb(null, newTasks);
        });
      } else {
        createTask(el, newTask => {
          newTasks.push(newTask);
        });
      }
    });
  // save single task
  } else {
    createTask(body, newTask => {
      cb(null, newTask);
    });
  }
  
};

exports.readAll = cb => {
  db.find({}).exec((err, tasks) => {
    if (err) return cb(err);
    cb(null, tasks);
  });
};

exports.read = (id, cb) => {
  db.find({_id: id}).exec((err, task) => {
    if (err) return cb(err);
    cb(null, task);
  });
};

exports.update = (id, body, cb) => {
  const {type} = body;
  db.findOneAndUpdate({_id: id}, {type: type}, (err, task) => {
    if (err) return cb(err);
    cb(null, task);
  });
};

exports.deleteAll = cb => {
  db.find({}).exec((err, tasks) => {
    if (err) return cb(err);
    db.remove(err => {
      if (err) return cb(err);
      cb(null, tasks);
    });
  });
};

exports.delete = (id, cb) => {
  db.findOneAndRemove({_id: id}, (err, task) => {
    if (err) return cb(err);
    cb(null, task);
  });
};