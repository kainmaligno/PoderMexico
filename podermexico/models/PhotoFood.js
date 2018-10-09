const mongoose = require("mongoose");
const {Schema}   = mongoose;

const photoFoodSchema = new Schema({
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  imgName: String,
  imgPath: String
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

var PhotoFood = mongoose.model("PhotoFood", photoFoodSchema);
module.exports = PhotoFood;