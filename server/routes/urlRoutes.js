const { Router } = require('express');
const router = Router();
const urlController = require("../controllers/urlController")

router.post("/add/url",urlController.addUrl);
router.get("/urls",urlController.getUrls);






module.exports = router;