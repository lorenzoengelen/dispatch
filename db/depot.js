const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const DepotSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  location: {
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true}
  }
});

DepotSchema.pre('save', next => {
  DepotModel.find({}, (err, depot) => {
    if (!depot.length) {
      next()
    } else {
      next(new Error('Only one depot allowed'));
    }
  })
});

const DepotModel = db.model('Depot', DepotSchema);

module.exports = DepotModel;

