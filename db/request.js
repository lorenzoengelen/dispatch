const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const requestSchema = new mongoose.Schema({
  type: { type: String, required: true },
  updated: { type: Date, default: Date.now },
  location: {
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true }
  },
  timeWindow: {
    lowerBound: { type: Number, required: true },
    upperBound: { type: Number, required: true }
  }
});

const Request = db.model('Request', requestSchema);

module.exports = Request;

