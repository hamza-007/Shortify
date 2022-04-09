const jwt = require('jsonwebtoken');
require("dotenv").config();
const User = require("../models/User")


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};
const handleErrors = (err) => {
    let errors = { email: '', password: '' };
  
    
    if (err.message === 'incorrect email') {
      errors.email = 'That email is not registered';
    }
  
    
    if (err.message === 'incorrect password') {
      errors.password = 'That password is incorrect';
    }
  
    
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    
    if (err.message.includes('user validation failed')) {
      
      Object.values(err.errors).forEach(({ properties }) => {
       
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }


module.exports.signup_post = async (req, res) => {
 let infos = req.body;
  try {
    await User.create(infos);
    res.status(201).redirect("http://localhost:3000/");
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
 
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
   try {
     const user = await User.login(email, password);
     const token = createToken(user._id);
     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
     res.redirect("http://localhost:3000/");
   } 
   catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
   }

}
module.exports.checkUser = async (req,res) =>{
  token = req.cookies.jwt;
  if (token){
    jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send(null);
      } else {
        const id =decodedToken.id
        const user =await  User.findOne({id})
        user ? res.send(true) : res.send(null);
      }
    });
  }
}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('http://localhost:3000/');
}