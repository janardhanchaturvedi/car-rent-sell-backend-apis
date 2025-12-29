const express = require("express");
const router = express.Router();
const DB = require("./../models");
/**
 * ROLE ADD
 * role/add
 * POST
 */

router.post("/add", (req, res, next) => {
  const { roleName } = req.body;
  const response = DB.ROLE.create({
    role: roleName,
  });
  return res.status(201).json({
    message: "Role Created Successfully",
    data: response,
  });
});
/**
 * ROLE GET
 */

/**
 * ROLE UPDATE
 */

/**
 * ROLE DELETE
 */

module.exports = router;
