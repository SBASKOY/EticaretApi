
import CryptoJs from "crypto-js";
import JWT from "jsonwebtoken";

const passwordToHash = (password: string) => {
    return CryptoJs.HmacSHA1(password, process.env.PASSWORD_HASH_KEY).toString()
}
const generateAccesToken = (user: Object) => {
    return JWT.sign(user, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: "1w"
    });
}
const generateRefreshToken = (user: Object) => {
    return JWT.sign(user, process.env.REFRESH_TOKEN_KEY);
}
export {
    passwordToHash,
    generateAccesToken,
    generateRefreshToken
}