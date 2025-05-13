const { Pool } = require("pg");

// Database connection to panda
module.exports = new Pool({
    host:       process.env.DB_HOST, 
    user:       process.env.DB_USER,
    database:   process.env.DB_NAME,
    password:   process.env.DB_PASS,
    port:       Number(process.env.DB_PORT)
});

console.log({
  host:   process.env.DB_HOST,
  user:   process.env.DB_USER,
  name:   process.env.DB_NAME,
  pass:   process.env.DB_PASS ? '******' : undefined,
  port:   process.env.DB_PORT,
});
