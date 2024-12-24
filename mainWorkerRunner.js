const { Worker } = require("worker_threads");
const path = require("path");
const fs = require("fs");

const s3BaseUrl = "https://heartlive.s3.ap-south-1.amazonaws.com/";
const dataDir = path.join(__dirname, "heartliveS3data");
const unusedDataDir = path.join(__dirname, "heartliveS3UnusedData");

// Ensure the unused data directory exists
if (!fs.existsSync(unusedDataDir)) {
  fs.mkdirSync(unusedDataDir);
}

// Find all JSON files in the data directory
const jsonFiles = fs
  .readdirSync(dataDir)
  .filter((file) => file.endsWith(".json"));

function runWorker(filePath) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData: { filePath, unusedDataDir, s3BaseUrl },
    });

    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function main() {
  try {
    const promises = jsonFiles.map((file) =>
      runWorker(path.join(dataDir, file))
    );
    const results = await Promise.all(promises);
    console.log("All workers completed:", results);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
