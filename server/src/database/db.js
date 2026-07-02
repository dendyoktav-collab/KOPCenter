const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "kopcenter",
    password: "123",
    port: 5432,
});

pool.connect((err) => {
    if (err) {
        console.log("❌ PostgreSQL Gagal Terhubung");
        console.log(err.message);
    } else {
        console.log("✅ PostgreSQL Berhasil Terhubung");
    }
});

module.exports = pool;