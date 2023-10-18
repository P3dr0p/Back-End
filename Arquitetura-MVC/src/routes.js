const express = require("express");
const ThoughtsController = require("./controller/ThoughtsController");

const UserController = require("./controller/UserController");
const User = require("./models/User");

const router = express.Router();

router.post("/users", UserController.createUser);
router.get("/users", UserController.findAllUsers);
router.get("/users/:id", UserController.findUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

router.get("/thoughts", ThoughtsController.findAllThoughts)

router.post("/thoughts", ThoughtsController.createThought)

router.get("/thoughts/:id", ThoughtsController.findThought)

router.put("/thoughts/:id")

module.exports = router;