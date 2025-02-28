const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  description: String,
  // Add more fields as needed
});

const Weather = mongoose.model('Weather', weatherSchema);
