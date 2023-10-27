const express = require("express");

const ThoughtsController = require("../controller/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.post("/thoughts/create", ThoughtsController.createThought);

router.get("/thoughts/:id", ThoughtsController.findThought);

router.get("/thoughts", ThoughtsController.findAllThoughts);
router.post("/thoughts", ThoughtsController.createThought);

router.get("/thoughts/:id", ThoughtsController.findThought);

router.delete("/thoughts/:id", ThoughtsController.deleteThought);

module.exports = router;