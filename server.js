const express = require("express");
const app = express();
require("dotenv").config();

const indexRoute = require("./routes/index");

app.use(indexRoute);

app.use(function onError(err, req, res, next) {
	// The error id is attached to res.sentry to be returned
	// and optionally displayed to the user for support.
	res.statusCode = 500;
	res.end(res.sentry + "\n");
});

app.listen(3000, () => {
	console.log(" listening on port 3000");
});
