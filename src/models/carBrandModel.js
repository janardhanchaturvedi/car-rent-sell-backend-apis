const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;
const carSchema = new Schema(
  {
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const brandModel = mongoose.model("brands", carSchema);
module.exports = brandModel;
