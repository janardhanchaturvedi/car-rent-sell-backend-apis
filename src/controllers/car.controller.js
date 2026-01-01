const DB = require;

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
