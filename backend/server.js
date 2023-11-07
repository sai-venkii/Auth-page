const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');
const brcypt = require('bcrypt');
const multer = require('multer');
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    pool.query('SELECT * FROM users WHERE USERNAME = ?',[username],async (err,result)=>{
        if (err) {
            if (err.code === '') {
                return res.status(400).send('Username already exists.');
            }else{
                console.error('Error inserting data:', err);
                return res.status(500).send('Internal Server Error');
            }
        } else{
            if(result.length==0){
                return res.status(400).send("No such user Exists");
            }else{
                const isMatch = await brcypt.compare(password,result[0].password);
                if(isMatch){
                    return res.status(200).send("Login Successful");
                }
                else{
                    return res.status(200).send("Password Incorrect");
                }
            }
        }
    });
});

app.post('/signup',upload.single('image'),async(req,res)=>{
    if(!req.file){
        return res.status(400).send('No image file uploaded.');
    }
    const {username,password,dob,email,gender}=req.body;
    const dobDate = new Date(dob).getFullYear();
    if (dobDate > 2002) {
        return res.status(400).send(' Age restriction!! Thambi Nee innum Vayasukku Varla...');
    }
    hased_password=await brcypt.hash(password,10);
    const insertQuery=`
    INSERT INTO users(username,password,gender,email,dob,profile) VALUES(?,?,?,?,?,?);
    `;
    pool.query(insertQuery,[username,hased_password,gender,email,dob,req.file.buffer],(err,result)=>{
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).send('Username already exists.');
            }else{
                console.error('Error inserting data:', err);
                res.status(500).send('Internal Server Error');
            }
          } else {
            res.status(200).send('Registered successsfully');
        }
    });
})

app.listen(5000,()=>{
    console.log("Listening to Port 5000");
})
