const express = require("express");
const users = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", users.list);
router.get("/users/new", users.create);
router.post("/users", users.doCreate);
router.get("/users/:id", users.detail);
router.get("/users/:id/edit", users.edit);
router.post("/users/:id", users.doEdit);
router.post("/users/:id/delete", users.delete);

module.exports = router;
