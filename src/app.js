/** @format */

const express = require("express");
const applyMiddlewares = require("./middleware");
const routes = require("./routes");
const app = express();
applyMiddlewares(app);
app.use(routes);
app.get("/health", (req, res) => {
  res.status(200).json({ message: "I am okay" });
});
app.use((err, _req, res, _next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});
module.exports = app;
