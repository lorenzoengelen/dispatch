const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const orderSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  name: String,
  load: Number,
  pickup: {
    serviceTime: Number,
    timeWindow: {
      earliest: String,
      latest: String
    },
    location: {
      lon: Number,
      lat: Number
    }
  },
  delivery: {
    serviceTime: Number,
    timeWindow: {
      earliest: String,
      latest: String
    },
    location: {
      lon: Number,
      lat: Number
    }
  }
});

const Order = db.model('Order', orderSchema);

module.exports = Order;

