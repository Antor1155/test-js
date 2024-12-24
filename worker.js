const { parentPort, workerData } = require("worker_threads");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { processContent } = require("./seperateUsedAndUnusedS3Files"); // Adjust the path as needed
const databaseConnection = require("./config/database");

const s3BaseUrl = workerData.s3BaseUrl;

const jsonFilePath = workerData.filePath;
const unusedDataFilePath = path.join(
  workerData.unusedDataDir,
  `unusedData_${path.basename(jsonFilePath)}`
);

async function loadJsonFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

async function saveUnusedData(unusedData) {
  fs.writeFileSync(unusedDataFilePath, JSON.stringify(unusedData, null, 2));
}

async function main() {
  try {
    // Load JSON data
    const jsonData = await loadJsonFile(jsonFilePath);

    // Connect to the database
    await databaseConnection();

    const unusedData = [];

    // Process each data entry
    const total = jsonData.length;
    let count = 1;
    let startTime = new Date();

    for (const data of jsonData) {
      const { Key } = data;
      const url = `${s3BaseUrl}${encodeURIComponent(Key)}`;

      console.log("searcing : ", { count, total, url });

      const response = await processContent(url);
      if (!response) {
        unusedData.push(data);
      }

      const now = new Date();
      const differenceInMinutes = Math.floor((now - startTime) / (1000 * 60));

      console.log(`count: ${count} took time: ${differenceInMinutes} minutes`);
      console.log("expected time: " + differenceInMinutes * total + " minutes");
      count++;
      startTime = new Date();
    }

    // Save unused data to a file
    await saveUnusedData(unusedData);

    console.log(
      `Processing complete for ${jsonFilePath}. Unused data saved to ${unusedDataFilePath}.`
    );
    parentPort.postMessage(`Worker completed for ${jsonFilePath}`);
  } catch (error) {
    console.error("Error:", error);
    parentPort.postMessage(
      `Worker error for ${jsonFilePath}: ${error.message}`
    );
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

main();
