const { S3 } = require("@aws-sdk/client-s3");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_ID;
const secretAccessKey =
	process.env.AWS_SECRET_KEY || process.env.AWS_SECRET_KEYS;

const s3 = new S3({
	region,

	credentials: {
		accessKeyId,
		secretAccessKey,
	},
});

const uploadFileS3 = ({ fileName, fileContent, fileAcl = "private" }) => {
	if (process.env.DO_SPACES_ROOT_DIR) {
		fileName = `${process.env.DO_SPACES_ROOT_DIR}/${fileName}`;
	}
	const params = {
		Bucket: process.env.DO_SPACES_BUCKET_NAME,
		Key: fileName,
		Body: fileContent,
		ACL: fileAcl,
	};

	return s3.upload(params).promise();
};

module.exports = { s3, uploadFileS3 };
