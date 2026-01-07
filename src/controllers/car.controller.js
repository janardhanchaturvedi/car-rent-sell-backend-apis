const DB = require("../models");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const addCarController = async (req, res) => {
  try {
    const {
      name,
      brandName,
      carType,
      manufacturingYear,
      features,
      transmission,
      capicity,
      sellingPrice,
      owner,
      serviceType,
      rentPerHour,
    } = req.body;
    const coverImage = req.files.coverImage;
    const galleryImage = req.files.gallery;
    console.log(
      "coverImage \n",
      coverImage,
      "galleryImage-------------------- \n ",
      galleryImage
    );
    const coverImagePromise = await coverImage.map((item) => {
      return uploadOnCloudinary(item.path);
    });
    const coverImageData = await Promise.all(coverImagePromise);

    const galleryImagePromise = await galleryImage.map((item) => {
      return uploadOnCloudinary(item.path);
    });

    const galleryImageResult = await Promise.all(galleryImagePromise);

    if (!coverImageData.length && !galleryImageResult.length) {
      return res.json({
        message: "Image upload failed",
      });
    }
    const galleryImages = galleryImageResult.map((result) => result?.url);
    const car = await DB.CAR.create({
      name,
      brandName,
      carType,
      manufacturingYear,
      features,
      transmission,
      capicity,
      sellingPrice,
      owner,
      serviceType,
      rentPerHour,
      carImage: coverImageData?.[0].url,
      gallery: galleryImages,
    });
    res.status(201).json({
      message: "Car added successfully",
      data: car,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error adding car",
      error: error.message,
    });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await DB.CAR.find();
    res.json({
      message: "",
      data: cars,
    });
  } catch (error) {
    res.json({
      message: "no car avalible",
      error: error.message,
    });
  }
};

const updateCarDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      brandName,
      carType,
      manufacturingYear,
      features,
      transmission,
      capicity,
      sellingPrice,
      owner,
      serviceType,
      rentPerHour,
    } = req.body;

    const updatecar = await DB.CAR.findByIdAndUpdate(
      id,
      {
        name: name?.toUpperCase(),
        brandName,
        carType,
        manufacturingYear,
        features,
        transmission,
        capicity,
        sellingPrice,
        owner,
        serviceType,
        rentPerHour,
      },
      { new: true }
    );
    res.json({
      message: "car update successfully",
      data: updatecar,
    });
  } catch (error) {
    res.json({
      message: "error updating car",
      error: error.message,
    });
  }
};
const getCarDetails = () => {};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCar = await DB.CAR.findByIdAndDelete(id);

    if (!deleteCar) {
      return res.status(404).json({
        message: "Car not found",
      });
    }
    res.json({
      message: "Car deleted successfully",
      data: deleteCar,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting car",
      error: error.message,
    });
  }
};

module.exports = {
  addCarController,
  getAllCars,
  getCarDetails,
  updateCarDetails,
  deleteCar,
};
