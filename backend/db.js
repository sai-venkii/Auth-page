const Pool=require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'root',
    database: 'chatapp'
});
pool.query('SELECT * FROM USERS');
module.exports=pool