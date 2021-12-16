
import express from "express";

import { index, create, update, remove, login, resetPassword } from "../controllers/User";


import validate from '../middlewares/validate'

import autheticateToken from '../middlewares/authenticate';

import  valid  from "../validations/User";

const router = express.Router();


router.get("/", autheticateToken,index);
router.get("/:id", autheticateToken,index);
router.post("/", autheticateToken, validate(valid.createValidation), create);
router.patch("/:id", autheticateToken, validate(valid.updateValidation), update);
router.delete("/:id", autheticateToken, remove);
router.post("/login", validate(valid.loginValidation),login);
router.post("/reset-password", validate(valid.resetValidation), resetPassword);


export default  router;