const pg = require("pg");
const Pool = pg.Pool;
require('dotenv').config();

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASS,
    port: DB_PORT,
});

module.exports = pool;
