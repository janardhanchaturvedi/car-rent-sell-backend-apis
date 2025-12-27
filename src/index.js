const express = require("express");
const connectDB = require("./db/dbConnection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on the PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("-------error in connecting DB", error);
  });

app.use(express.json());
