const pool = require("../config/database");
const bcrypt = require("bcrypt");

// ===========================
// GET /api/users
// ===========================
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        u.id,
        u.username,
        u.full_name,
        u.email,
        u.phone,
        u.is_active,
        r.role_name
      FROM users u
      JOIN roles r ON u.role_id = r.id
      ORDER BY u.username
    `);

    res.json({
      success: true,
      total: result.rows.length,
      data: result.rows
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// GET /api/users/:id
// ===========================
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT
        u.id,
        u.username,
        u.full_name,
        u.email,
        u.phone,
        u.is_active,
        r.role_name,
        u.role_id
      FROM users u
      JOIN roles r ON u.role_id = r.id
      WHERE u.id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan"
      });
    }

    res.json({
      success: true,
      data: result.rows[0]
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// POST /api/users
// ===========================
const createUser = async (req, res) => {
  try {
    const {
  username,
  password,
  full_name,
  email,
  phone,
  role_id
} = req.body;

console.log("===== REQUEST BODY =====");
console.log(req.body);
console.log("========================");

    const check = await pool.query(
      "SELECT id FROM users WHERE username = $1",
      [username]
    );

    if (check.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Username sudah digunakan"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `
      INSERT INTO users
      (
        username,
        password,
        full_name,
        email,
        phone,
        role_id,
        is_active,
        created_at,
        updated_at
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,true,NOW(),NOW()
      )
      RETURNING
        id,
        username,
        full_name,
        email,
        phone,
        is_active
      `,
      [
        username,
        hashedPassword,
        full_name,
        email,
        phone,
        role_id
      ]
    );

    res.status(201).json({
      success: true,
      message: "User berhasil ditambahkan",
      data: result.rows[0]
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// PUT /api/users/:id
// ===========================
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      full_name,
      email,
      phone,
      role_id,
      is_active
    } = req.body;

    const check = await pool.query(
      "SELECT id FROM users WHERE id = $1",
      [id]
    );

    if (check.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan"
      });
    }

    const result = await pool.query(
      `
      UPDATE users
      SET
        full_name = $1,
        email = $2,
        phone = $3,
        role_id = $4,
        is_active = $5,
        updated_at = NOW()
      WHERE id = $6
      RETURNING
        id,
        username,
        full_name,
        email,
        phone,
        role_id,
        is_active
      `,
      [
        full_name,
        email,
        phone,
        role_id,
        is_active,
        id
      ]
    );

    res.json({
      success: true,
      message: "User berhasil diperbarui",
      data: result.rows[0]
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// DELETE /api/users/:id
// ===========================
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek apakah user ada
    const check = await pool.query(
      "SELECT id, username FROM users WHERE id = $1",
      [id]
    );

    if (check.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan"
      });
    }

    await pool.query(
      "DELETE FROM users WHERE id = $1",
      [id]
    );

    res.json({
      success: true,
      message: "User berhasil dihapus"
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};