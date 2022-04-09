const Url = require("../models/Url");
const User = require ("../models/User")
const jwt = require('jsonwebtoken');

module.exports.addUrl = async (req,res) =>{
    token = req.cookies.jwt;
    let user
  if (token){
    jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send("error occured");
      } else {
        const id =decodedToken.id
        user =await  User.findOne({id})
        let full = req.body.full
        await Url.create({full,user_id : id});
        res.redirect("http://localhost:3000/")
      }
    });
  }
    
}


module.exports.getUrls = async (req,res) =>{
    token = req.cookies.jwt;
  if (token){
    jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send("error occured");
        return 
      } 
        const id =decodedToken.id
        const urls = await Url.find({id})
        console.log(urls);
        
      
    });
  }else{
    res.send("error auth")
  }
    
}


