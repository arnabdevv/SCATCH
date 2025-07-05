// Multer config for file uploads (memory storage)
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = upload;
