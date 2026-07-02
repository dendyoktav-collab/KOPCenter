const pool = require("../config/database");

const permissionMiddleware = (requiredPermission) => {
  return async (req, res, next) => {
    try {

      const userId = req.user.id;

      const result = await pool.query(
        `
        SELECT DISTINCT p.name
        FROM users u
        JOIN roles r
          ON r.id = u.role_id
        JOIN role_permissions rp
          ON rp.role_id = r.id
        JOIN permissions p
          ON p.id = rp.permission_id
        WHERE u.id = $1
        `,
        [userId]
      );

      const permissions = result.rows.map(
        row => row.name
      );

      const hasPermission = permissions.includes(
        requiredPermission
      );

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: "Akses ditolak"
        });
      }

      next();

    } catch (err) {

      console.error(
        "Permission Middleware Error:",
        err.message
      );

      return res.status(500).json({
        success: false,
        message: "Server Error"
      });
    }
  };
};

module.exports = permissionMiddleware;