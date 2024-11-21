
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const DbConnected = require('./Models/DB');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors())



DbConnected();

app.get('/',(req,res)=>res.send("Hello Would"));
app.listen(PORT,()=>console.log(`Server ${PORT} is successfully connectd`));