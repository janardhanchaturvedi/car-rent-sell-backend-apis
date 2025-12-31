const DB = require("./../models");

const addRoleController = async (req, res, next) => {
  const { roleName } = req.body;
  try {
    const response = await DB.ROLE.create({
      role: roleName,
    });
    return res.status(201).json({
      message: "Role Created Successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

module.exports = {
  addRoleController,
};
