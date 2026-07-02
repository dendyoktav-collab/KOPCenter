const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/database");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const dashboardRoutes = require(
  "./routes/dashboard.routes"
);

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);
app.use(
  "/api/dashboard",
  dashboardRoutes
);

// Health Check
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    app: "KOPCenter Enterprise",
    version: "1.0.0",
    status: "Running",
  });
});

// Route Not Found
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Global Error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : undefined,
  });
});

module.exports = app;