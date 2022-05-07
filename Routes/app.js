const express = require("express");
const userController = require("../Controllers/user");
const { Validation, ValidationResult } = require("../Middlewares/validator");
const app = express();
app.use(express.json());
const {body, validationResult} = require("express-validator");
const UserMiddleware = require("../Middlewares/validator");



app.post("/register", body("email").isEmail(),body("password").isLength({min:6}), ValidationResult, userController.Register)
app.post("/login", userController.Login)
app.post("/post", UserMiddleware.isValidToken, (req,res)=>{
    console.log("This is Post");
} )


module.exports = app;