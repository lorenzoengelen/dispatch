const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

const requestSchema = new mongoose.Schema({
  type: String
});

const Request = db.model('Request', requestSchema);

module.exports = Request;

