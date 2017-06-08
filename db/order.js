const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const orderSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  name: String,
  load: Number,
  pickup: {
    service_time: Number,
    time_window: {
      earliest: Number,
      latest: Number
    },
    location: {
      lon: Number,
      lat: Number
    }
  },
  delivery: {
    service_time: Number,
    time_window: {
      earliest: Number,
      latest: Number
    },
    location: {
      lon: Number,
      lat: Number
    }
  }
});

const Order = db.model('Order', orderSchema);

module.exports = Order;

