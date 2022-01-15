

const JWT = require("jsonwebtoken");

const ApiError = require("../errors/apiError");
const autheticateToken = (req, res, next) => {
    var authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    if (token === null) {
        return next(new ApiError("Yetkisiz giriş",401));
    }
    JWT.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) {
            return next(new ApiError("Yetkisiz giriş", 401))
        }
        req.user = user;
        next();
    });
}
module.exports = autheticateToken;