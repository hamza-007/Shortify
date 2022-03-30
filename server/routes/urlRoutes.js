const { Router } = require('express');
const router = Router();
const urlController = require("../controllers/urlController")

router.get("/:id/urls",urlController.getUrls);














module.exports = router;