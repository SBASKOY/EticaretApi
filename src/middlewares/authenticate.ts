

//const JWT = require("jsonwebtoken");
import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
const autheticateToken = (req: Request, res: Response, next:Function) => {
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
        req.body.user = user;
        next();
    });
}
export default autheticateToken;