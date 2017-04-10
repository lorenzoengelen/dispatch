const db = require('../db/task');

exports.create = (body, cb) => {
  const {type, location, timeWindow} = body;
  db.create({type, location, timeWindow}, (err, task) => {
    console.log(err);
    if (err) return cb(err);
    cb(null, task);
  });
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