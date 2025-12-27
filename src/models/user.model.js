const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  password: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
  },
  role: {
    type: ObjectId,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
