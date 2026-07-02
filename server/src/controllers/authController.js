const pool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ===========================
// LOGIN
// ===========================
const login = async (req, res) => {
  try {

    console.log("Request Body:", req.body);

    const { username, password } = req.body;

    console.log("Username:", username);

    const result = await pool.query(
      `
      SELECT
          u.id,
          u.username,
          u.password,
          u.full_name,
          u.role_id,
          r.role_name
      FROM users u
      JOIN roles r ON u.role_id = r.id
      WHERE u.username = $1
      `,
      [username]
    );

    console.log("Hasil Query:", result.rows);

    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Username tidak ditemukan"
      });
    }

    const user = result.rows[0];

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Password Valid:", valid);

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: "Password salah"
      });
    }

    const accessToken = jwt.sign(
  {
    id: user.id,
    username: user.username,
    role: user.role_name,
    role_id: user.role_id,
    role_name: user.role_name
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "12h"
  }
);

const refreshToken = jwt.sign(
  {
    id: user.id
  },
  process.env.JWT_REFRESH_SECRET,
  {
    expiresIn: "7d"
  }
);
await pool.query(
  `
  UPDATE users
  SET refresh_token = $1
  WHERE id = $2
  `,
  [refreshToken, user.id]
);
    res.status(200).json({
  success: true,
  accessToken,
  refreshToken,
      user: {
        id: user.id,
        username: user.username,
        fullName: user.full_name,
        role: user.role_name,
        role_id: user.role_id,
        role_name: user.role_name
      }
    });

  } catch (err) {

    console.error("Login Error:", err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// PROFILE
// ===========================
const profile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
};

// ===========================
// CHANGE PASSWORD
// ===========================
const changePassword = async (req, res) => {
  try {

    const userId = req.user.id;

    const {
      currentPassword,
      newPassword
    } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Password lama dan password baru wajib diisi"
      });
    }

    const userResult = await pool.query(
      `
      SELECT id, password
      FROM users
      WHERE id = $1
      `,
      [userId]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan"
      });
    }

    const user = userResult.rows[0];

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password lama salah"
      });
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    await pool.query(
      `
      UPDATE users
      SET password = $1
      WHERE id = $2
      `,
      [hashedPassword, userId]
    );

    return res.status(200).json({
      success: true,
      message: "Password berhasil diubah"
    });

  } catch (error) {

    console.error(
      "Change Password Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// REFRESH TOKEN
// ===========================
const refreshAccessToken = async (req, res) => {
  try {

    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token diperlukan"
      });
    }

    const userResult = await pool.query(
      `
      SELECT *
      FROM users
      WHERE refresh_token = $1
      `,
      [refreshToken]
    );

    if (userResult.rows.length === 0) {
      return res.status(403).json({
        success: false,
        message: "Refresh token tidak valid"
      });
    }

    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      (err, decoded) => {

        if (err) {
          return res.status(403).json({
            success: false,
            message: "Refresh token expired"
          });
        }

        const user = userResult.rows[0];

        const accessToken = jwt.sign(
          {
            id: user.id,
            username: user.username,
            role: user.role,
            role_id: user.role_id,
            role_name: user.role_name
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "12h"
          }
        );

        return res.status(200).json({
          success: true,
          accessToken
        });
      }
    );

  } catch (error) {

    console.error(
      "Refresh Token Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

// ===========================
// LOGOUT
// ===========================
const logout = async (req, res) => {
  try {

    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token wajib diisi"
      });
    }

    await pool.query(
      `
      UPDATE users
      SET refresh_token = NULL
      WHERE refresh_token = $1
      `,
      [refreshToken]
    );

    return res.status(200).json({
      success: true,
      message: "Logout berhasil"
    });

  } catch (error) {

    console.error(
      "Logout Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
module.exports = {
  login,
  profile,
  changePassword,
  refreshAccessToken,
  logout
};