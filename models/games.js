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
  platform: {
    type: Array,
    default: undefined,
    required: true,
  },
  releaseDate: {
    type: Date,
    min: "1900-01-01",
    required: true,
  },
  // isFavorited: {
  //   type: Boolean,
  // },
  // favorited: {
  //   type: Number,
  // },
  // isWishlisted: {
  //   type: Boolean,
  // },
  // wishlisted: {
  //   type: Number,
  // },
  // isAcquired: {
  //   type: Boolean,
  // },
});

module.exports = mongoose.model("Game", gamesSchema);
