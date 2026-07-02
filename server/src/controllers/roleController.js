const pool = require("../config/database");

// ===========================
// GET /api/roles
// ===========================
const getAllRoles = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        role_name,
        description,
        created_at,
        updated_at
      FROM roles
      ORDER BY role_name ASC
    `);

    res.status(200).json({
      success: true,
      total: result.rows.length,
      data: result.rows
    });

  } catch (error) {
    console.error("Get Roles Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// GET /api/roles/:id
// ===========================
const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        role_name,
        description,
        created_at,
        updated_at
      FROM roles
      WHERE id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Role tidak ditemukan"
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    console.error("Get Role By ID Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// POST /api/roles
// ===========================
const createRole = async (req, res) => {
  try {
    const { role_name, description } = req.body;

    // Validasi
    if (!role_name || role_name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Nama role wajib diisi"
      });
    }

    // Cek duplikasi
    const existingRole = await pool.query(
      `
      SELECT id
      FROM roles
      WHERE LOWER(role_name) = LOWER($1)
      `,
      [role_name.trim()]
    );

    if (existingRole.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Role sudah ada"
      });
    }

    // Insert role
    const result = await pool.query(
      `
      INSERT INTO roles (role_name, description)
      VALUES ($1, $2)
      RETURNING
        id,
        role_name,
        description,
        created_at,
        updated_at
      `,
      [
        role_name.trim(),
        description || null
      ]
    );

    res.status(201).json({
      success: true,
      message: "Role berhasil dibuat",
      data: result.rows[0]
    });

  } catch (error) {
    console.error("Create Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// ===========================
// PUT /api/roles/:id
// ===========================
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_name, description } = req.body;

    // Validasi
    if (!role_name || role_name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Nama role wajib diisi"
      });
    }

    // Cek role ada
    const existingRole = await pool.query(
      `
      SELECT id
      FROM roles
      WHERE id = $1
      `,
      [id]
    );

    if (existingRole.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Role tidak ditemukan"
      });
    }

    // Cek duplikasi nama
    const duplicateRole = await pool.query(
      `
      SELECT id
      FROM roles
      WHERE LOWER(role_name) = LOWER($1)
      AND id <> $2
      `,
      [role_name.trim(), id]
    );

    if (duplicateRole.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Nama role sudah digunakan"
      });
    }

    // Update role
    const result = await pool.query(
      `
      UPDATE roles
      SET
        role_name = $1,
        description = $2,
        updated_at = NOW()
      WHERE id = $3
      RETURNING
        id,
        role_name,
        description,
        created_at,
        updated_at
      `,
      [
        role_name.trim(),
        description || null,
        id
      ]
    );

    res.status(200).json({
      success: true,
      message: "Role berhasil diperbarui",
      data: result.rows[0]
    });

  } catch (error) {
    console.error("Update Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// ===========================
// DELETE /api/roles/:id
// ===========================
const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek role ada
    const existingRole = await pool.query(
      `
      SELECT id
      FROM roles
      WHERE id = $1
      `,
      [id]
    );

    if (existingRole.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Role tidak ditemukan"
      });
    }

    // Cek apakah role dipakai user
    const usedByUser = await pool.query(
      `
      SELECT id
      FROM users
      WHERE role_id = $1
      LIMIT 1
      `,
      [id]
    );

    if (usedByUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Role masih digunakan oleh user"
      });
    }

    // Hapus role
    await pool.query(
      `
      DELETE FROM roles
      WHERE id = $1
      `,
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Role berhasil dihapus"
    });

  } catch (error) {
    console.error("Delete Role Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// ===========================
// POST /api/roles/:id/permissions
// ===========================
const assignPermissionsToRole = async (req, res) => {
  const client = await pool.connect();

  try {
    const { id } = req.params;
    const { permission_ids } = req.body;

    // Validasi
    if (!permission_ids || !Array.isArray(permission_ids)) {
      return res.status(400).json({
        success: false,
        message: "permission_ids harus berupa array"
      });
    }

    // Cek role
    const roleResult = await client.query(
      `
      SELECT id
      FROM roles
      WHERE id = $1
      `,
      [id]
    );

    if (roleResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Role tidak ditemukan"
      });
    }

    await client.query("BEGIN");

    // Hapus permission lama
    await client.query(
      `
      DELETE FROM role_permissions
      WHERE role_id = $1
      `,
      [id]
    );

    // Simpan permission baru
    for (const permissionId of permission_ids) {
      await client.query(
        `
        INSERT INTO role_permissions (
          role_id,
          permission_id
        )
        VALUES ($1, $2)
        `,
        [id, permissionId]
      );
    }

    await client.query("COMMIT");

    res.status(200).json({
      success: true,
      message: "Permission role berhasil diperbarui"
    });

  } catch (error) {

    await client.query("ROLLBACK");

    console.error(
      "Assign Permission Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  } finally {
    client.release();
  }
};

// ===========================
// GET /api/roles/:id/permissions
// ===========================
const getRolePermissions = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek role
    const roleResult = await pool.query(
      `
      SELECT
        id,
        role_name
      FROM roles
      WHERE id = $1
      `,
      [id]
    );

    if (roleResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Role tidak ditemukan"
      });
    }

    // Ambil seluruh permission milik role
    const result = await pool.query(
      `
      SELECT
        p.id,
        p.permission_name,
        p.description
      FROM role_permissions rp
      INNER JOIN permissions p
        ON p.id = rp.permission_id
      WHERE rp.role_id = $1
      ORDER BY p.permission_name ASC
      `,
      [id]
    );

    res.status(200).json({
      success: true,
      role: roleResult.rows[0],
      total: result.rows.length,
      data: result.rows
    });

  } catch (error) {
    console.error(
      "Get Role Permissions Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
// ===========================
// DELETE ROLE PERMISSION
// ===========================
const removePermissionFromRole = async (req, res) => {
  try {
    const { roleId, permissionId } = req.params;

    // cek role
    const roleResult = await pool.query(
      `
      SELECT id, role_name
      FROM roles
      WHERE id = $1
      `,
      [roleId]
    );

    if (roleResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Role tidak ditemukan"
      });
    }

    // cek permission
    const permissionResult = await pool.query(
      `
      SELECT id, permission_name
      FROM permissions
      WHERE id = $1
      `,
      [permissionId]
    );

    if (permissionResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Permission tidak ditemukan"
      });
    }

    // cek relasi
    const relationResult = await pool.query(
      `
      SELECT *
      FROM role_permissions
      WHERE role_id = $1
      AND permission_id = $2
      `,
      [roleId, permissionId]
    );

    if (relationResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Permission tidak dimiliki role ini"
      });
    }

    // hapus relasi
    await pool.query(
      `
      DELETE FROM role_permissions
      WHERE role_id = $1
      AND permission_id = $2
      `,
      [roleId, permissionId]
    );

    return res.status(200).json({
      success: true,
      message: "Permission berhasil dihapus dari role"
    });

  } catch (error) {
    console.error(
      "Remove Permission From Role Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
  assignPermissionsToRole,
  getRolePermissions,
  removePermissionFromRole
};