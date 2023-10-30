const express = require("express");

const ThoughtsController = require("../controller/ThoughtsController");

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.get("/thoughts-create", ThoughtsController.registerThought);

router.post("/thoughts/create", ThoughtsController.findThought);

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditthought);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

router.delete("/thoughts/:id", ThoughtsController.deleteThought);

module.exports = router;