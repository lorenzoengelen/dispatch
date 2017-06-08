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
          newVehicle.push(newVehicle);
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