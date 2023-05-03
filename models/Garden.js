const mongoose = require("mongoose");

const GardenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  zipCode: {
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
  gardenMethod: {
    type: Array,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Garden", GardenSchema);
