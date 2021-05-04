const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Game", gamesSchema);
