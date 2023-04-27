const mongoose = require("mongoose");

const GardenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  zip: {
    type: Number,
    require: true,
  },
  firstFrost: {
    type: Date,
    require: true,
  },
  lastFrost: {
    type: Date,
    require: true,
  },
  gardenMethod: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
