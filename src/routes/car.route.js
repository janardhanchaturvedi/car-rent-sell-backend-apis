const express = require("express");
const router = express.Router();
const DB = require("../models");
const CONTROLLER = require("../controllers");
const { upload } = require("../middleware/mutler");
const app = express();
app.use(express.json());
/**
 * /cars
 * POST
 */
// router.post("/", upload.array("gallery", 8), CONTROLLER.CAR.addCarController);
// router.post("/", upload.single("gallery"), CONTROLLER.CAR.addCarController);
router.post(
  "/",
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    {
      name: "gallery",
    },
  ]),
  CONTROLLER.CAR.addCarController
);

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

router.delete("/image", CONTROLLER.CAR.deletImage);
/**
 * cars/:id
 * DELETE
 */
router.delete("/:id", CONTROLLER.CAR.deleteCar);

module.exports = router;
