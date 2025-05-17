const mongoose = require('mongoose');

const cartSchema= new mongoose.Schema({
  foodname: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: String,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['breakfast','veg','non veg','other']
  },

  
});

module.exports = mongoose.model('cart', cartSchema); 