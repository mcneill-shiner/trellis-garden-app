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
  // gardenMethod: [{
  //   type: String,
  // }],
  gardenMethod: {
    seedlings: {type: Boolean, default: false},
    sowDirect: {type: Boolean, default: false},
    startIndoors: {type: Boolean, default: false},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
