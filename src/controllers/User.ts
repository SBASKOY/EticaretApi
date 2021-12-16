
import randStr from 'randomstring';

import { Request ,Response } from 'express';


import { saveUser, updateUser, getUsers, deleteUser, findOne, modify } from "../services/User";

import { passwordToHash, generateAccesToken, generateRefreshToken } from "../utils/helper";
const eventEmitter = require("../scripts/events/eventsEmitter");

const index = (req: Request, res: Response) => {
    getUsers(req.params?.id).then(respose => {
        res.status(200).send(respose);
    }).catch(err => {
        res.status(500).send(err);
    })
}

const create = (req: Request, res:Response) => {
    req.body.password = passwordToHash(req.body.password);
    saveUser(req.body).then((respose:any) => {
        res.status(200).send(respose);
    }).catch((err:any) => {
        res.status(500).send(err);
    })
}

const update = (req: Request, res: Response) => {
    var id = req.params?.id;
    if (req.body?.password) {
        req.body.password = passwordToHash(req.body.password);
    }
    updateUser(id, req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}


const remove = (req: Request, res: Response) => {
    var id = req.params?.id;
    deleteUser(id).then(respose => {
        res.status(200).send(respose);
    }).catch(err => {
        res.status(500).send(err);
    })
}

const login = (req: Request, res: Response) => {
    req.body.password = passwordToHash(req.body.password);
    findOne(req.body).then(user => {
        if (user) {
            user = {
                ...user.toObject(),
                tokens: {
                    accessToken: generateAccesToken({
                        name: user.username,
                        ...user
                    }),
                    refreshToken: generateRefreshToken({
                        name: user.username,
                        ...user
                    })
                }
            }
            delete user.password;
            res.status(200).send(user);
            return;
        }
        return res.status(401).send({
            error: "Kullanıc adı veya şifre hatalı."
        });
    }).catch(err => {
        res.status(500).send(err);
    })
}


const resetPassword = (req: Request, res: Response) => {
    var password = randStr.generate(20);
    modify({ email: req.body?.email }, { password: passwordToHash(password) }).then(updatedUser => {
        if (!updatedUser) return res.status(404).send({ error: "User not found" });
        eventEmitter.emit("send_email", {
            to: updatedUser.email,
            subject: "Reset Password",
            html: `Şifre sıfırlama işlememiz gerçekleşmiştir<br/> Yeni Şifreniz: <b>${password}</b>`
        });
        res.status(200).send({
            message: "Yeni şifreniz e-mail adresine gönderildi"
        });
    }).catch(err => res.status(500).send(err));
}

export {
    index,
    create,
    update,
    remove,
    login,
    resetPassword
}
