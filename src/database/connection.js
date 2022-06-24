const mongoose = require('mongoose');
require('dotenv').config();

const conn = async () => {
  try {
    await mongoose.connect(process.env.CONNECTMONGO);

    console.log('connected to Mongo');
    return { connected: true };
  } catch (error) {
    return console.log(error.message);
  }
};

conn();

module.exports = conn;
