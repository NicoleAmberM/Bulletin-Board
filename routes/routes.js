const express = require('express');
const router = express.Router();

const articleController = require("../controller/articles.contr");
const renderController = require("../controller/render.contr")

router.get("/", articleController.getAll);
router.get("/:id", articleController.get);
router.post("/", articleController.add);
router.put("/:id", articleController.update);
router.delete("/:id", articleController.delete);

router.get("/edit/:id", renderController.editView);

module.exports = router;