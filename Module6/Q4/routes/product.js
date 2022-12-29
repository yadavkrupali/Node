const express = require("express");
const controller = require("../controller/product");
const routes = express.Router();

routes.post("/", controller.add);

routes.get("/", controller.getList);

routes.put("/:id", controller.update);

routes.delete("/:id", controller.delete);

module.exports = routes;
