const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const carSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brandName: {
    type: ObjectId,
    // required: true,
    trim: true,
    ref: "brands",
  },
  carImage: {
    type: String,
    required: true,
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
    // required: true,
  },
  sellingPrice: {
    type: Number,
    // required: true,
  },
  owner: {
    type: ObjectId,
    ref: "users",
  },
  serviceType: {
    type: String,
    enum: ["RENTAL", "SELL"],
  },
  rentPerHour: {
    type: Number,
  },
  gallery: {
    type: [String],
  },
});

const carModel = mongoose.model("cars", carSchema);
module.exports = carModel;
