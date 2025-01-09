const multer = require("multer");
const { tempStorage } = require("./storage/disk");
const { resourceStorage } = require("./storage/s3");
const { MAX_SIZE_TEMP_FILE } = require("./settings");

const fileFilter = (req, file, cb) => {
	if (true) {
		cb(null, true);
	}
};

const tempUpload = multer({
	storage: resourceStorage,
	fileFilter,
	limits: { fileSize: MAX_SIZE_TEMP_FILE },
});

module.exports = {
	tempUpload,
};
