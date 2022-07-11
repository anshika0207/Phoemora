const express = require("express");
const router = express.Router();
const { getAllUsers, signup, login } = require("../controllers/users");
const { authenticateToken } = require("../middleware/login");

router.route("/user").get(getAllUsers);
router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
