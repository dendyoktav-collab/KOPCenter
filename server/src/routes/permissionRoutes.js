const express = require("express");
const router = express.Router();

const permissionController = require("../controllers/permissionController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// ===========================
// GET ALL PERMISSIONS
// ===========================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("Super Admin"),
  permissionController.getAllPermissions
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("Super Admin"),
  permissionController.getPermissionById
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("Super Admin"),
  permissionController.createPermission
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("Super Admin"),
  permissionController.updatePermission
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("Super Admin"),
  permissionController.deletePermission
);

module.exports = router;