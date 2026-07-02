const pool = require("../config/db");

const auditLogger = async ({
  userId,
  action,
  entity,
  entityId = null,
  description = null,
  ipAddress = null
}) => {
  try {
    await pool.query(
      `
      INSERT INTO audit_logs
      (
        user_id,
        action,
        entity,
        entity_id,
        description,
        ip_address
      )
      VALUES ($1,$2,$3,$4,$5,$6)
      `,
      [
        userId,
        action,
        entity,
        entityId,
        description,
        ipAddress
      ]
    );
  } catch (error) {
    console.error(
      "Audit Logger Error:",
      error
    );
  }
};

module.exports = auditLogger;