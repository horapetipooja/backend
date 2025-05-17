const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
    email: {
    type: String,
    required: true,
    
  },
  password: {
    type: Number,
    required: true,
    min: 0
  },
  address: {
    type: String,
    required: true,
    
  },

  mobileno: {
    type: Number,
    required: true,
    
  },

});

module.exports = mongoose.model('Login', LoginSchema); 