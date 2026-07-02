const pool = require("../config/database");

// ===========================
// GET /api/permissions
// ===========================
const getAllPermissions = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        permission_name,
        description,
        created_at,
        updated_at
      FROM permissions
      ORDER BY permission_name ASC
    `);

    res.status(200).json({
      success: true,
      total: result.rows.length,
      data: result.rows
    });

  } catch (error) {
    console.error("Get Permissions Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// ===========================
// GET /api/permissions/:id
// ===========================
const getPermissionById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        permission_name,
        description
      FROM permissions
      WHERE id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Permission tidak ditemukan"
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    console.error("Get Permission By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// ===========================
// POST /api/permissions
// ===========================
const createPermission = async (req, res) => {
  try {
    const { permission_name, description } = req.body;

    // Validasi
    if (!permission_name || permission_name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Nama permission wajib diisi"
      });
    }

    // Cek duplikasi
    const existingPermission = await pool.query(
      `
      SELECT id
      FROM permissions
      WHERE LOWER(permission_name) = LOWER($1)
      `,
      [permission_name]
    );

    if (existingPermission.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Permission sudah ada"
      });
    }
for (const permissionId of permission_ids) {

  const permissionResult = await client.query(
    `
    SELECT id
    FROM permissions
    WHERE id = $1
    `,
    [permissionId]
  );

  if (permissionResult.rows.length === 0) {

    await client.query("ROLLBACK");

    return res.status(404).json({
      success: false,
      message: `Permission ${permissionId} tidak ditemukan`
    });
  }

}
    // Simpan data
    const result = await pool.query(
      `
      INSERT INTO permissions (
        permission_name,
        description
      )
      VALUES ($1, $2)
      RETURNING *
      `,
      [permission_name.trim(), description || null]
    );

    res.status(201).json({
      success: true,
      message: "Permission berhasil dibuat",
      data: result.rows[0]
    });

  } catch (error) {
    console.error("Create Permission Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// PUT /api/permissions/:id
// ===========================
const updatePermission = async (req, res) => {
  try {
    const { id } = req.params;
    const { permission_name, description } = req.body;

    // Validasi
    if (!permission_name || permission_name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Nama permission wajib diisi"
      });
    }

    // Cek permission ada
    const existingPermission = await pool.query(
      `
      SELECT id
      FROM permissions
      WHERE id = $1
      `,
      [id]
    );

    if (existingPermission.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Permission tidak ditemukan"
      });
    }

    // Cek duplikasi selain dirinya sendiri
    const duplicatePermission = await pool.query(
      `
      SELECT id
      FROM permissions
      WHERE LOWER(permission_name) = LOWER($1)
      AND id <> $2
      `,
      [permission_name, id]
    );

    if (duplicatePermission.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Permission sudah ada"
      });
    }

    // Update data
    const result = await pool.query(
      `
      UPDATE permissions
      SET
        permission_name = $1,
        description = $2
      WHERE id = $3
      RETURNING *
      `,
      [
        permission_name.trim(),
        description || null,
        id
      ]
    );

    res.status(200).json({
      success: true,
      message: "Permission berhasil diperbarui",
      data: result.rows[0]
    });

  } catch (error) {
    console.error("Update Permission Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// DELETE /api/permissions/:id
// ===========================
const deletePermission = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek permission ada
    const existingPermission = await pool.query(
      `
      SELECT id
      FROM permissions
      WHERE id = $1
      `,
      [id]
    );

    if (existingPermission.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Permission tidak ditemukan"
      });
    }

    // Cek apakah permission masih dipakai role
    const usedByRole = await pool.query(
      `
      SELECT id
      FROM role_permissions
      WHERE permission_id = $1
      LIMIT 1
      `,
      [id]
    );

    if (usedByRole.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Permission masih digunakan oleh role"
      });
    }

    // Hapus permission
    await pool.query(
      `
      DELETE FROM permissions
      WHERE id = $1
      `,
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Permission berhasil dihapus"
    });

  } catch (error) {
    console.error("Delete Permission Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

module.exports = {
  getAllPermissions,
  getPermissionById,
  createPermission,
  updatePermission,
  deletePermission
};