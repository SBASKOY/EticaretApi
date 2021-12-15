

const JWT = require("jsonwebtoken");

const autheticateToken = (req, res, next) => {
    var authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];
    if (token === null) {
        return res.status(401).send({
            error: "Bu işlem için lütfen giriş yapınız"
        });
    }
    JWT.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
        if (err) {
            return res.status(401).send({
                error: "Bu işlem için lütfen giriş yapınız"
            });
        }
        req.user = user;
        next();
    });
}
module.exports = autheticateToken;