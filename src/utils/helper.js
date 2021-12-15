
const CryptoJs=require("crypto-js");
const JWT=require("jsonwebtoken");

const passwordToHash=(password)=>{
  return CryptoJs.HmacSHA1(password, process.env.PASSWORD_HASH_KEY).toString()
}
const generateAccesToken=(user)=>{
    return JWT.sign(user, process.env.ACCESS_TOKEN_KEY,{
        expiresIn:"1w"
    });
}
const generateRefreshToken = (user) => {
    return JWT.sign(user, process.env.REFRESH_TOKEN_KEY);
}
module.exports={
    passwordToHash,
    generateAccesToken,
    generateRefreshToken
}