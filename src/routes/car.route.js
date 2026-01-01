const express = require("express");
const router = express.Router();
const DB = require("../models");
const CONTROLLER = require("../controllers");
const app = express();
app.use(express.json());
/**
 * /cars
 * POST
 */
router.post("/", CONTROLLER.CAR.addCarController);

/**
 * /cars
 * GET
 */
router.get("/", CONTROLLER.CAR.getAllCars);

/**
 * cars/:id
 * GET
 */
router.get("/:id", CONTROLLER.CAR.getCarDetails);

/**
 * car/:id
 * PUT
 */
router.put("/:id", CONTROLLER.CAR.updateCarDetails);

/**
 * cars/:id
 * DELETE
 */
router.delete("/:id", CONTROLLER.CAR.deleteCar);

module.exports = router;
