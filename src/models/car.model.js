const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const carSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  brandName: {
    type: ObjectId,
    require: true,
    trim: true,
    ref: "brands",
  },
  carType: {
    type: String,
    enum: ["SUV", "Sedan"],
  },
  manufacturingYear: {
    type: Number,
    trim: true,
  },
  features: {
    type: [String],
  },
  transmission: {
    type: String,
    enum: ["Manual", "Automatic"],
  },
  capicity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  owner: {
    type: ObjectId,
    ref: "users",
  },
});

const carModel = mongoose.model("cars", carSchema);
module.exports = carModel;
