const jwtToken = require("jsonwebtoken");
const SECRET_KEY = "MY_SECRET_KEY";

function generateToken(payload){
const token =   jwtToken.sign(payload, SECRET_KEY)
return token;
}
function verifyToken(token){
    const data =   jwtToken.verify(token,SECRET_KEY)
    return data;
}

module.exports = {
    generateToken,
    verifyToken
}