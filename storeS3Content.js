require("dotenv").config();

const fs = require("fs");
const path = require("path");

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

let count = 0;
let number = 1;

const addToJson = (data, realtivePath, filename) => {
  try {
    const filePath = path.join(
      __dirname,
      realtivePath,
      `${number}_${filename}.json`
    );
    let fileData = [];

    if (fs.existsSync(filePath)) {
      const existingData = fs.readFileSync(filePath);
      fileData = JSON.parse(existingData);
    }

    fileData = fileData.concat(data);
    count += data.length;

    if (count > 50000) {
      number++;
      count = data.length;
      fileData = data;
    }

    fs.writeFileSync(
      path.join(__dirname, realtivePath, `${number}_${filename}.json`),
      JSON.stringify(fileData, null, 2)
    );
  } catch (error) {
    console.error(error);
  }
};

const monthsBefore = 3;
const now = new Date();
const dateBefore = new Date(now.setMonth(now.getMonth() - monthsBefore));

async function listAllObjects(params) {
  let total = 0;
  let isTruncated = true;
  let continuationToken = null;

  while (isTruncated) {
    if (continuationToken) {
      params.ContinuationToken = continuationToken;
    }

    const data = await s3.listObjectsV2(params).promise();
    total += data?.Contents?.length;

    console.log({ total });

    const filteredData = data.Contents.filter(
      (item) => new Date(item.LastModified) < dateBefore
    );

    addToJson(filteredData, "./heartliveS3data/", "heartliveS3data");
    isTruncated = data.IsTruncated;
    continuationToken = data.NextContinuationToken;
  }

  return "done processing total data " + total;
}

(async () => {
  try {
    const params = {
      Bucket: AWS_BUCKET_NAME,
      Prefix: "files/", // Target the "files" folder
      // other parameters if needed
    };

    const response = await listAllObjects(params);

    console.log({ response });
  } catch (error) {
    console.error(error);
  }
})();

module.exports = { addToJson, s3 };
