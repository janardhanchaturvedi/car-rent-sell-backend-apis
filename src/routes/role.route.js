const express = require("express");
const router = express.Router();
const CONTROLLERS = require("./../controllers");
const auth = require("./../middleware/authentication");
const { ROLES } = require("./../utils/constants/enums");
/**
 * ROLE ADD
 * role/add
 * POST
 */

router.post(
  "/add",
  auth(true, [ROLES.ADMIN]),
  CONTROLLERS.ROLE.addRoleController
);
/**
 * ROLE GET
 */

/**
 * ROLE UPDATE
 */

/**
 * ROLE DELETE
 */

router.delete("/", () => {});

module.exports = router;
