const bcrypt = require("bcrypt");

function encryptPassword(plainPassword){
    const encryptPassword = bcrypt.hashSync(plainPassword,10);
    console.log(encryptPassword);
    return encryptPassword;
}
 function decryptPassword(plainPassword,encrypedtPassword){
    console.log(plainPassword,encrypedtPassword);
    const encryptPassword = bcrypt.compareSync(plainPassword,encrypedtPassword);
    return encryptPassword;
}
 module.exports = {
    encryptPassword,
     decryptPassword
}