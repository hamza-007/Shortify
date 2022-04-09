const express = require('express');
const cors=require('cors');
const app=express();
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();
const urlRoutes = require('./routes/urlRoutes');
const userRoutes = require("./routes/userRoutes");
const db_con = "mongodb+srv://hamza:123@cluster0.ilmue.mongodb.net/Cluster0";


mongoose.connect(db_con,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(res=>{console.log("connected to database succesfully");})
  .catch(err=>{console.log("error connecting to database ")});

  
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


app.use(urlRoutes);
app.use(userRoutes);



let port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});