const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/register", userController.signup_post);
router.post("/login", userController.login_post);
router.get("/logout", userController.logout_get);

module.exports = router;
