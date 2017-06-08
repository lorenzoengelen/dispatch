const db = require('../db/vehicle');

exports.create = (body, cb) => {

  const createVehicle = (newVehicle, callback) => {
    let {name, depot, startShift, endShift, capacity} = newVehicle;
    db.create({name, depot, startShift, endShift, capacity}, (err, vehicle) => {
      if (err) return cb(err);
      callback(vehicle);
    })
  };

  // save multiple vehicles
  if (Array.isArray(body)) {
    let newVehicles = [];
    body.forEach((el, index) => {
      if (index + 1 === body.length) {
        createVehicle(el, newVehicle => {
          newVehicles.push(newVehicle);
          cb(null, newVehicles);
        })
      } else {
        createVehicle(el, newVehicle => {
          newVehicles.push(newVehicle);
        });
      }
    });
  // save single vehicle
  } else {
    createVehicle(body, newVehicle => {
      cb(null, newVehicle);
    });
  }

};

exports.readAll = cb => {
  db.find({}).exec((err, vehicles) => {
    if (err) return cb(err);
    cb(null, vehicles);
  });
}

exports.update = (id, body, cb) => {
  const {type} = body;
  db.findOneAndUpdate({_id: id}, {type: type}, (err, vehicle) => {
    if (err) return cb(err);
    cb(null, vehicle);
  });
};

exports.deleteAll = cb => {
  db.find({}).exec((err, vehicles) => {
    if (err) return cb(err);
    db.remove(err => {
      if (err) return cb(err);
      cb(null, vehicles);
    });
  });
};

exports.delete = (id, db) => {
  db.findOneAndRemove({_id: id}, (err, vehicle) => {
    if (err) return cb(err);
    cb(null, vehicle);
  });
};