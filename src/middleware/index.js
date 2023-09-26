/** @format */

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const applyMiddlewares = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());
};
module.exports = applyMiddlewares;
