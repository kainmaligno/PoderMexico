const mongoose = require("mongoose");
const {Schema}   = mongoose;

const photoSchema = new Schema({
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  imgName: String,
  imgPath: String
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

var Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;