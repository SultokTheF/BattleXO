const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: {
    type: String, // Change the type to String to store only the time
    default: new Date().toLocaleTimeString(), // Set the default value to the current time
  },
});

module.exports = mongoose.model('Chat', chatSchema);
