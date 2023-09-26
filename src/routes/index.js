/** @format */
const { controllers: userController } = require("../api/v1/user");
const routes = require("express").Router();
routes.post("/api/v1/users", userController.createUser);
module.exports = routes;
