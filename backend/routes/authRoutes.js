const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/login", authController.login);
router.get("/dashboard", verifyToken, authController.dashboard);

module.exports = router;
