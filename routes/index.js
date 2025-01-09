const router = require("express").Router();

const { multerPostTest } = require("../controllers/multerController");

const { tempUpload } = require("../multer/temp");

router.post("/multer-file", tempUpload.single("banner"), multerPostTest);

module.exports = router;
