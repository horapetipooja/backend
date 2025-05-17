const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
    required: true,
    enum:[1,2,3,4,5]
  },
  productbought: {
    type: String,
    required: true,
    trim:true
  },
  review: {
    type: String,
    required:true,
    enum:['good','execellent','average']
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema); 