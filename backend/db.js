const sql = require('mysql2');

const pool = new sql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatapp',
    connectionLimit: 10
});
pool.getConnection((err,connection)=>{
    if(err){
        console.log(err);
    }
    else if(connection){
        console.log("Pool is Connected");
        connection.release();
        return;
    }
})
module.exports=pool