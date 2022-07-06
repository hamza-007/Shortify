const { Router } = require("express");
const router = Router();
const urlController = require("../controllers/urlController");

router.get("/urls", urlController.getUrls);

router.post("/add/url", urlController.addUrl);

router.get("/delete/:id", urlController.removeUrl);

router.get("/click/:url", urlController.onClickUrl);

module.exports = router;
