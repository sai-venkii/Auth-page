const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
app.use(cors());
app.use(express.json());

/*
pool.query('SELECT*FROM USERS',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
        
    else{
        console.log(err.message);
    }
});
*/

app.listen(5000,()=>{
    console.log("Listening to Port 5000");
})
