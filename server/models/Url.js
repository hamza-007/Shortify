const mongoose = require("mongoose");



const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: [true, "Please enter an link !!"],
  },
  short: {
    type: String,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user_id: {
    type: String,
  },
});



const Url = mongoose.model("url", urlSchema);

module.exports = Url;
