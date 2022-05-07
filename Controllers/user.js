const UserModel = require("../Models/user");
const {body, validationResult} = require("express-validator");
const jwtService = require("../commonlib/jwtToken");
const encryptDecrypt = require("../commonlib/encryption-decryption")

async function Register(req,res,next){
    let details = req.body;
    console.log(details);
    let encryptPassword = await encryptDecrypt.encryptPassword(details.password);
    body.timestamp = new Date();
    details.password = encryptPassword;
    const response = await UserModel.insertMany([details]);
    delete details.password;
    const token = jwtService.generateToken(details)
    res.status(200).json({
        status: "Registration Successful",
        Token : token
    });
}

async function Login(req,res,next){
    let details = req.body;
    let userDetail = await UserModel.findOne({email:details.email});
    const isValidPassword = encryptDecrypt.decryptPassword(details.password, userDetail.password)
    console.log(isValidPassword);
   if(isValidPassword){
       delete details.password;
       let token = jwtService.generateToken(details);
       res.json({
         status: "Login Successful",
         token: token
       })
   }else{
       res.json("Password is not valid");
   }
}

module.exports = {
    Register,
    Login
}