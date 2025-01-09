const router = require("express").Router();

const { multerPostTest } = require("../controllers/multerController");

const { tempUpload } = require("../multer/temp");

router.use("/multer-file", tempUpload.single("banner"), multerPostTest);

module.exports = router;
