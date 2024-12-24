require("dotenv").config();

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
const AWS_ACCESS_ID = process.env.AWS_ACCESS_ID;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const AWS_SECRET_KEYS = process.env.AWS_SECRET_KEYS;

const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_ID,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_BUCKET_REGION,
});

const content = {
  Key: "files/      -           - meyeder picture - NeotericIT.com (5)-1714042563088.png",
  LastModified: "2024-04-25T10:56:04.000Z",
  ETag: '"bd85ff094830ec0d0819ea04cebe5b30"',
  ChecksumAlgorithm: [],
  Size: 311352,
  StorageClass: "STANDARD",
};

const s3BaseUrl = "https://heartlive.s3.ap-south-1.amazonaws.com/";

(async () => {
  const { Key } = content;
  //   const response = await s3.getSignedUrlPromise("getObject", {
  //     Bucket: AWS_BUCKET_NAME,
  //     Key: Key,
  //   });

  const response = `${s3BaseUrl}${encodeURIComponent(Key)}`;

  console.log({ response });
})();
