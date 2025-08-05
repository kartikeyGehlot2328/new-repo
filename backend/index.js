const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./Models/userModel.js')
const app = express();
const dbConnect = require('./Models/db.js');
const cors = require('cors');

app.use(cors({origin:true}));


dbConnect();

app.get("/all",async (req,res)=>{
  let data =  await userModel.find({});
  res.send(data);
});

module.exports = app;

