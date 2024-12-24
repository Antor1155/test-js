require("dotenv").config();
const { default: mongoose } = require("mongoose");

async function processContent(content) {
  try {
    const db = mongoose.connection;
    if (!db || !db.readyState) {
      throw new Error("Failed to connect to the database");
    }

    const collections = await db.listCollections();
    console.log("Collections:", collections.length);

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
    ];

    const bigTables = {
      streams: "roomBackground",
      messages: "content",
    };

    for (const collectionInfo of collections) {
      if (collectionsToSkip.includes(collectionInfo.name)) {
        console.log("Skipping collection:", collectionInfo.name);
        continue;
      }

      const collection = db.collection(collectionInfo.name);
      console.log("searching in Collection:", collectionInfo.name);

      const batchSize = 1000; // Adjust the batch size as needed
      const cursor = collection.find({}).batchSize(batchSize);

      const cursorCount = await cursor.count();
      const total = await collection.countDocuments();

      console.log({ total, cursorCount });

      while (await cursor.hasNext()) {
        const doc = await cursor.next();

        if (bigTables[collectionInfo.name]) {
          if (containsUrl(doc[bigTables[collectionInfo.name]], content)) {
            return { collection: collectionInfo.name, doc, content };
          }
        } else if (containsUrl(doc, content)) {
          console.log(`URL found in collection ${collectionInfo.name}:`, doc);
          return { collection: collectionInfo.name, doc, content };
        }
      }
    }

    console.log("!!! content not found in any collection");
    return null;
  } catch (error) {
    console.error(error);
    return error;
  }
}

function containsUrl(obj, url) {
  if (typeof obj === "string" && obj.includes(url)) {
    return true;
  }

  if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (containsUrl(obj[key], url)) {
        return true;
      }
    }
  }

  return false;
}

// (async () => {
//   try {
//     const content =
//       "https://heartlive.s3.ap-south-1.amazonaws.com/files/scaled_1000005350-1735029014459.jpeg";

//     const response = await processContent(content);

//     console.log({ response });
//   } catch (error) {
//     console.error(error);
//   }
// })();

module.exports = { processContent };
