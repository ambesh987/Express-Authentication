const {body, validationResult} = require("express-validator");
const jwtService= require("../commonlib/jwtToken");


function ValidationResult(req,res,next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
}

function isValidToken(req,res,next){

    try {
        let token = req.headers.token;
        let response = jwtService.verifyToken(token);
        console.log(response);
        next();
    } catch (error) {
        res.status(500).json(error);
    }

   
}

module.exports = {
    ValidationResult,
    isValidToken
}