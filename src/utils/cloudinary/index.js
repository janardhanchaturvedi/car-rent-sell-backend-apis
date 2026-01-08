const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};
const getPublicId = (imageURL) => {
  // Split the URL at the 'upload/' segment
  const parts = imageURL.split("upload/");

  if (parts.length < 2) {
    return null; // Not a standard Cloudinary delivery URL
  }

  // Get the part of the URL after 'upload/' (e.g., 'v1312461204/examples/avatar.jpg' or 'examples/avatar.jpg')
  const publicIdWithExtension = parts[1].split("/").slice(1).join("/"); // Remove the optional 'v[number]/' if present
  // Remove the file extension
  const extensionIndex = publicIdWithExtension.lastIndexOf(".");
  if (extensionIndex === -1) {
    return publicIdWithExtension; // No extension found (unlikely for images)
  }
  return publicIdWithExtension.substring(0, extensionIndex);
};

const deleteFromCloudinary = async (filePath) => {
  console.log(filePath);
  const publicId = getPublicId(filePath);
  try {
    if (!publicId) return;
    const response = await cloudinary.uploader.destroy(publicId);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadOnCloudinary, deleteFromCloudinary };
