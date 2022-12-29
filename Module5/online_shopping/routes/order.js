const express = require("express");
const controller = require("../controller/order");
const auth = require("../middleware/auth");
const routes = express.Router();

routes.post("/", auth, controller.create);

routes.get("/", auth, controller.getList);

module.exports = routes;
