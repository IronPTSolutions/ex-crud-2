const express = require("express");
const homeController = require("../controllers/home.controller");
const users = require("../controllers/users.controller");
const router = express.Router();

router.get("/", homeController.home);

router.get("/users", users.list);
router.get("/users/:id", users.detail);
router.get("/users/new", users.create);
router.get("/users/update", users.update);
router.get("/users/delete", users.delete);

module.exports = router;
