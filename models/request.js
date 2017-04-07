const db = require('../db/request');

exports.create = (body, cb) => {
  const {type} = body;
  db.create({type: type}, (err, request) => {
    if (err) return cb(err);
    cb(null, request);
  });
};

exports.readAll = cb => {
  db.find({}).exec((err, requests) => {
    if (err) return cb(err);
    cb(null, requests);
  });
};

exports.read = (id, cb) => {
  db.find({_id: id}).exec((err, request) => {
    if (err) return cb(err);
    cb(null, request);
  });
};

exports.update = (id, body, cb) => {
  const {type} = body;
  db.findOneAndUpdate({_id: id}, {type: type}, (err, request) => {
    if (err) return cb(err);
    cb(null, request);
  });
};

exports.delete = (id, cb) => {
  db.findOneAndRemove({_id: id}, (err, request) => {
    if (err) return cb(err);
    cb(null, request);
  });
};