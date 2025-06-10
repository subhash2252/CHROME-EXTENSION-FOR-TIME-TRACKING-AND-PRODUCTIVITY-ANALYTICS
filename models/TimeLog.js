const mongoose = require('mongoose');

const TimeLogSchema = new mongoose.Schema({
  domain: { type: String, required: true },
  timeSpent: { type: Number, required: true }, 
  date: { type: String, required: true }, 
  userId: { type: String, required: true }
});

module.exports = mongoose.model('TimeLog', TimeLogSchema);
