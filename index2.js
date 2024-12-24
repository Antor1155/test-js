const express = require("express");
const app = express();
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://ae9cf3892bd94d9babde8eab4fb227ac@sentry.xebraa.co.uk/2",
  debug: true,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(3000);
