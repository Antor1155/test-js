const multerS3 = require("multer-s3-transform");
const { s3 } = require("../../services/s3");
// const { Roles } = require("../../helpers/enums")

const bucketName = process.env.AWS_BUCKET_NAME;

const generateStorageS3 = ({
	folderName,
	customSubFolder,
	makePublic = false,
}) => {
	if (process.env.DO_SPACES_ROOT_DIR) {
		folderName = `${process.env.DO_SPACES_ROOT_DIR}/${folderName}`;
	}
	return multerS3({
		s3: s3,
		bucket: bucketName,
		acl: makePublic ? "public-read" : "private",
		contentType: function (req, file, cb) {
			cb(null, file.mimetype);
		},
		metadata: function (req, file, cb) {
			cb(null, {
				fieldName: file.fieldname,
			});
		},
		key: function (req, file, cb) {
			const filename =
				new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
			let filepath =
				folderName +
				"/" +
				(customSubFolder ? `${customSubFolder(req, file)}/` : "") +
				filename;
			filepath = filepath.replace("//", "/");
			req.file_url = filepath;

			console.log({ filepath });
			cb(null, filepath);
		},
	});
};
const resourceStorage = generateStorageS3({
	folderName: "resource",
});

module.exports = {
	resourceStorage,
};
