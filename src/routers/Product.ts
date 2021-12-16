
import express from "express";
import validate from "../middlewares/validate";

import {index,create, update, remove } from "../controllers/Product";
import { createValidation, updateValidation} from "../validations/Product";
import autheticateToken from "../middlewares/authenticate";
const router = express.Router();


router.get("/",index);
router.get("/:id",index);
router.post("/", autheticateToken,validate(createValidation), create);
router.patch("/:id", autheticateToken,validate(updateValidation),update);
router.delete("/:id", autheticateToken,remove);



export default  router;