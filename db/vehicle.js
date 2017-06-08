const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const vehicleSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  name: String,
  depot: {
    id: String,
    name: String,
    lon: Number,
    lat: Number
  },
  startShift: String,
  endShift: String,
  capacity: Number
});

const Vehicle = db.model('Vehicle', vehicleSchema);

module.exports = Vehicle;