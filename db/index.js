const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/dispatch';

const db = mongoose.connect(mongoUri, (err) => {
  if (err) {
    console.log('Unable to connect to mongo', err);
    process.exit(1);
  } else {
    console.log('Connected to mongo uri', mongoUri);
  }
});

module.exports = db;