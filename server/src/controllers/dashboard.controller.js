const db = require("../config/database");

exports.getDashboardStats = async (req, res) => {
  try {
    const [
      totalUsersQuery,
      totalRolesQuery,
      totalPermissionsQuery,
    ] = await Promise.all([
      db.query(`
        SELECT COUNT(*) AS total
        FROM users
      `),

      db.query(`
        SELECT COUNT(*) AS total
        FROM roles
      `),

      db.query(`
        SELECT COUNT(*) AS total
        FROM permissions
      `),
    ]);

    // sementara dummy sampai modul POS dibuat
    const todayTransactions = 0;

    return res.status(200).json({
      success: true,
      data: {
        totalUsers: Number(
          totalUsersQuery.rows[0]?.total || 0
        ),

        totalRoles: Number(
          totalRolesQuery.rows[0]?.total || 0
        ),

        totalPermissions: Number(
          totalPermissionsQuery.rows[0]?.total || 0
        ),

        todayTransactions,
      },
    });
  } catch (error) {
    console.error(
      "Dashboard Stats Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Gagal memuat dashboard",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};