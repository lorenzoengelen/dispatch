const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const depotSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  location: {
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true}
  }
});

const Depot = db.model('Task', depotSchema);

module.exports = Depot;

