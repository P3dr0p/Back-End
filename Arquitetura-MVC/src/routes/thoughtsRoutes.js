const express = require("express");

const ThoughtsController = require("../controller/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.get("/thoughts", ThoughtsController.findAllThoughts)

router.post("/thoughts", ThoughtsController.createThought)

router.get("/thoughts/:id", ThoughtsController.findThought)

router.put("/thoughts/:id", ThoughtsController.updateThought)

router.delete("/thoughts/:id", ThoughtsController.deleteThought)

module.exports = router;