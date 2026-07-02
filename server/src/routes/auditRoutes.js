const express = require("express");
const router = express.Router();

const auditController = require(
  "../controllers/auditController"
);

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const permissionMiddleware = require(
  "../middleware/permissionMiddleware"
);

router.get(
  "/",
  authMiddleware,
  permissionMiddleware("audit.read"),
  auditController.getAuditLogs
);

module.exports = router;