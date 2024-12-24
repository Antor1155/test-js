const mongoose = require("mongoose");

function databaseConnection() {
	const { DB_URI } = process.env;

	mongoose
		.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(() => {
			console.log("Database connected");
		})
		.catch((e) => {
			return console.log(e);
		});
}

module.exports = databaseConnection;
