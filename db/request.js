const mongoose = require('mongoose');
const db = require('./index');

const requestSchema = new mongoose.Schema({
  type: String
});

const Request = db.model('Request', requestSchema);

module.exports = Request;

