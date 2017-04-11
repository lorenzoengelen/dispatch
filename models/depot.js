const db = require('../db/depot');

exports.create = (body, cb) => {
  let {location} = body;
  db.create({location}, (err, depot) => {
    if (err) return cb(err.message);
    cb(null, depot);
  });
};

exports.read = cb => {
  db.find({}).exec((err, depot) => {
    if (err) return cb(err);
    cb(null, depot);
  });
};

exports.update = (body, cb) => {
  let {location} = body;
  db.findOneAndUpdate({}, {location}, {new: true}, (err, depot) => {
    if (err) return cb(err);
    cb(null, depot);
  });
};

exports.delete = cb => {
  db.find({}).exec((err, depots) => {
    if (err) return cb(err);
    db.remove(err => {
      if (err) return cb(err);
      cb(null, depots);
    });
  });
};