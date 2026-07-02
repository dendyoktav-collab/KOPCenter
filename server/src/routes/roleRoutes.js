const express = require("express");
const router = express.Router();

const roleController = require("../controllers/roleController");

const authMiddleware = require("../middleware/authMiddleware");
const permissionMiddleware = require(
  "../middleware/permissionMiddleware"
);

// GET ALL ROLES
router.get(
  "/",
  authMiddleware,
  permissionMiddleware("roles.read"),
  roleController.getAllRoles
);

// ASSIGN PERMISSIONS TO ROLE
router.post(
  "/:id/permissions",
  authMiddleware,
  permissionMiddleware("roles.assign_permission"),
  roleController.assignPermissionsToRole
);

// GET ROLE PERMISSIONS
router.get(
  "/:id/permissions",
  authMiddleware,
  permissionMiddleware("roles.read"),
  roleController.getRolePermissions
);

// REMOVE PERMISSION FROM ROLE
router.delete(
  "/:roleId/permissions/:permissionId",
  authMiddleware,
  permissionMiddleware("roles.remove_permission"),
  roleController.removePermissionFromRole
);

// GET ROLE BY ID
router.get(
  "/:id",
  authMiddleware,
  permissionMiddleware("roles.read"),
  roleController.getRoleById
);

// CREATE ROLE
router.post(
  "/",
  authMiddleware,
  permissionMiddleware("roles.create"),
  roleController.createRole
);

// UPDATE ROLE
router.put(
  "/:id",
  authMiddleware,
  permissionMiddleware("roles.update"),
  roleController.updateRole
);

// DELETE ROLE
router.delete(
  "/:id",
  authMiddleware,
  permissionMiddleware("roles.delete"),
  roleController.deleteRole
);

module.exports = router;