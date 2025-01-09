require("dotenv").config();
const { default: mongoose } = require("mongoose");
const databaseConnection = require("./config/database");
const path = require("path");
const fs = require("fs");

let number = 1;
// const dbStorage = "pencilDbData";
// const projectFolderName = "pencilDbUsedUrl";

const dbStorage = "sealionDbData";
const projectFolderName = "sealionDbUsedUrl";

const collectionsToSkip = [
	"gametransactions",
	"gifttrackers",
	"salaryhubs",
	"topups",
	"exchanges",
	"follows",
	"checkins",
	"users2",
	"users3",
	"users4",
	"users5",
	"users6",
	"blocks",
	"kickouts",
	"games",
	"aladins",
	"usersbackup",
	"rolagamehistory",
	"activities",
	"sellery_23_may",
	"friends",
	"logger",
	"gamehistories",
	"chats",
	"sellery_2023_1",
	"sellery_2023_m",
	"history",
	"salaries",
	"agencysalaries",
	"visitors",
	"alibabagifttrackers",
	"sessions",
	"usersessions",
	"bags",
	"sockets",
	"feedlikes",
	"bans",
	"aladingiftdrafts",
	"devicebans",
	"history",
	"beanadmins",
	"system.views",
	"redis",
];

// const bigTables = {
//   streams: "roomBackground",
//   messages: "content",
// };

async function findUrlinCollection() {
	try {
		await databaseConnection();

		const db = mongoose.connection;
		if (!db || !db.readyState) {
			throw new Error("Failed to connect to the database");
		}

		const collections = await db.listCollections();
		// const collections = [{ name: "beanadmins" }];
		console.log("Collections:", collections.length);

		for (const collectionInfo of collections) {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			if (collectionsToSkip.includes(collectionInfo.name)) {
				console.log("Skipping collection:", collectionInfo.name);
				continue;
			}

			const collection = db.collection(collectionInfo.name);
			console.log("saving Collection:", collectionInfo.name);

			const total = await collection.countDocuments({});
			const batchSize = total < 500 ? total : 500; // Adjust the batch size as needed

			const cursor = collection.find({}).batchSize(batchSize);

			const cursorCount = await cursor.count();

			console.log({ total, cursorCount });

			while (await cursor.hasNext()) {
				const doc = await cursor.next();
				if (doc) {
					addToJson(doc, dbStorage, collectionInfo.name);
				}
			}
		}
		number = 1;
		console.log("saving all db data completed");

		const dbFilePath = path.join(__dirname, dbStorage);
		const dbFiles = fs.readdir(dbFilePath, (err, files) => {
			if (err) {
				return colsole.log("unable to scan directory: ", err);
			}

			for (const file of files) {
				console.log("scanning file: ", file);
				const filePath = path.join(dbFilePath, file);

				const data = fs.readFileSync(filePath);

				const normalData = JSON.parse(data);

				for (let data of normalData) {
					const urls = containsUrl(data);

					if (urls.length) {
						addToJson(urls, projectFolderName, "userdUrls");
					}
				}
			}
		});

		console.log("!!! getting all urls completed");
		return null;
	} catch (error) {
		console.error(error);
		return error;
	}
}

function containsUrl(data) {
	try {
		const urls = [];

		function findUrls(obj) {
			if (typeof obj === "string") {
				if (obj.match(/https?:\/\/[^\s]+/)) {
					urls.push(obj);
				}

				return;
			}

			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					const value = obj[key];

					if (typeof value === "string" && value.match(/https?:\/\/[^\s]+/)) {
						urls.push(value);
					} else if (Array.isArray(value)) {
						value.forEach((item) => findUrls(item));
					} else if (typeof value === "object" && value !== null) {
						findUrls(value);
					}
				}
			}
		}

		findUrls(data);

		return urls;
	} catch (error) {
		console.error(error);
	}
}

const exampleObj = {
	user: { name: "John", website: "http://example.com" },
	book: true,
	posts: [
		{ id: 1, link: "https://post1.com" },
		{ id: 2, content: "No URL here" },
		"https://post2.com",
		"https://post3.com",
	],
};

const example2 = {};

// console.log(containsUrl(exampleObj));

const addToJson = (data, folderName, fileName) => {
	try {
		const filePath = path.join(
			__dirname,
			`./${folderName}`,
			`${number}_${fileName}.json`
		);

		let fileData = [];

		if (fs.existsSync(filePath)) {
			const existingData = fs.readFileSync(filePath);
			fileData = JSON.parse(existingData);
		}

		// console.log("file length: ", fileData.length);

		fileData = fileData.concat(data);

		if (fileData.length > 50000) {
			number++;
			fileData = data;
		}

		fs.writeFileSync(
			path.join(__dirname, `./${folderName}`, `${number}_${fileName}.json`),
			JSON.stringify(fileData, null, 2)
		);
	} catch (error) {
		console.error(error);
	}
};

const extractUrl = () => {
	try {
		const dbFilePath = path.join(__dirname, dbStorage);
		const dbFiles = fs.readdir(dbFilePath, (err, files) => {
			if (err) {
				return colsole.log("unable to scan directory: ", err);
			}

			for (const file of files) {
				console.log("scanning file: ", file);
				const filePath = path.join(dbFilePath, file);

				const data = fs.readFileSync(filePath);

				const normalData = JSON.parse(data);
				console.log("file data size: ", normalData?.length);
				for (let data of normalData) {
					const urls = containsUrl(data);

					if (urls.length) {
						addToJson(urls, projectFolderName, "userdUrls");
					}
				}
			}
		});
	} catch (error) {
		console.error("error in extractUrl", error);
	}
};

// findUrlinCollection();

extractUrl();

module.exports = { findUrlinCollection };
