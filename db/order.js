const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const orderSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  load: Number,
  pickup: {
    serviceTime: Number,
    timeWindow: {
      earliestTime: Number,
      latestTime: Number
    },
    location: {
      longitude: Number,
      latitude: Number
    }
  },
  delivery: {
    serviceTime: Number,
    timeWindow: {
      earliestTime: Number,
      latestTime: Number
    },
    location: {
      longitude: Number,
      latitude: Number
    }
  }
});

const Order = db.model('Order', orderSchema);

module.exports = Order;

