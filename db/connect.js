const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
  // .then(() => console.log('CONNECTED to db...'))
  // .catch((err) => console.error('ERROR', err));
};

module.exports = connectDB;
