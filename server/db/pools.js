const { Pool } = require("pg");

// Database connection to panda
module.exports = new Pool({
    host:       process.env.DB_HOST, 
    user:       process.env.DB_USER,
    database:   process.env.DB_NAME,
    password:   process.env.DB_PASS,
    port:       Number(process.env.DB_PORT)
});
