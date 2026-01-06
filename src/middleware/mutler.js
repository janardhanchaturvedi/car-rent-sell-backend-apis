const multer = require("multer");
const path = require("path");

const fileFilter = (_req, file, cb) => {
  let ext = path.extname(file.originalname);

  if (
    ext !== ".jpg" &&
    ext !== ".jpeg" &&
    ext !== ".webp" &&
    ext !== ".png" &&
    ext !== ".mp4"
  ) {
    return;
  }

  cb(null, true);
};

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
  fileFilter,
});
module.exports = {
  upload,
};
