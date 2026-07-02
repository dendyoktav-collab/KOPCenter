const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const permissionMiddleware = require(
  "../middleware/permissionMiddleware"
);

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get(
  "/",
  authMiddleware,
  permissionMiddleware("users.read"),
  getAllUsers
);

router.get(
  "/:id",
  authMiddleware,
  permissionMiddleware("users.read"),
  getUserById
);

router.post(
  "/",
  authMiddleware,
  permissionMiddleware("users.create"),
  createUser
);

router.put(
  "/:id",
  authMiddleware,
  permissionMiddleware("users.update"),
  updateUser
);

router.delete(
  "/:id",
  authMiddleware,
  permissionMiddleware("users.delete"),
  deleteUser
);

module.exports = router;