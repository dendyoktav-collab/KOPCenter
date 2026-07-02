const pool = require("../config/db");

const getAuditLogs = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT
        al.id,
        al.action,
        al.entity,
        al.entity_id,
        al.description,
        al.ip_address,
        al.created_at,
        u.id AS user_id,
        u.email
      FROM audit_logs al
      LEFT JOIN users u
        ON u.id = al.user_id
      ORDER BY al.created_at DESC
    `);

    return res.status(200).json({
      success: true,
      total: result.rows.length,
      data: result.rows
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

module.exports = {
  getAuditLogs
};