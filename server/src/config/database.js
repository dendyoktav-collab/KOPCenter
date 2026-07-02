const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.connect()
  .then(() => {
    console.log(
      "✅ PostgreSQL Connected"
    );
  })
  .catch((err) => {
    console.error(
      "❌ PostgreSQL Connection Error:",
      err.message
    );
  });

pool.on("error", (err) => {
  console.error(
    "❌ Database Error:",
    err.message
  );
});

module.exports = pool;