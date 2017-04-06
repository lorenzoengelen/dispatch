var db = require('../db/request');

exports.create = function(body, cb) {
  var type = body.type;
  db.create({type: type}, function(err, request) {
    if (err) return cb(err);
    cb(null, request);
  });
};

exports.readAll = function(cb) {
  db.find({}).exec(function(err, requests) {
    if (err) return cb(err);
    cb(null, requests);
  });
};

exports.read = function(id, cb) {
  db.find({_id: id}).exec(function(err, request) {
    if (err) return cb(err);
    cb(null, request);
  });
};

exports.update = function(id, body, cb) {
  var type = body.type;
  db.findOneAndUpdate({_id: id}, {type: type}, function(err, request) {
    if (err) return cb(err);
    cb(null, request);
  });
};

exports.delete = function(id, cb) {
  db.findOneAndRemove({_id: id}, function(err, request) {
    if (err) return cb(err);
    cb(null, request);
  });
};