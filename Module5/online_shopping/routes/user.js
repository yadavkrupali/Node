const express = require("express");
const controller = require("../controller/user");
const auth = require("../middleware/auth");
const routes = express.Router();

routes.post("/register", controller.register);

routes.post("/login", controller.login);

routes.get("/profile", auth, controller.getProfile);

module.exports = routes;
