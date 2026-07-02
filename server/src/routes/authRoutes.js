const express = require("express");
const router = express.Router();

const {
  login,
  profile,
  changePassword,
  refreshAccessToken,
  logout
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// LOGIN
router.post("/login", login);

// PROFILE
router.get(
  "/profile",
  authMiddleware,
  profile
);

// CHANGE PASSWORD
router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

router.post(
  "/refresh-token",
  refreshAccessToken
);
router.post(
  "/logout",
  logout
);
module.exports = router;