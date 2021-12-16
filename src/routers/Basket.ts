
import express  from "express";
import validate from "../middlewares/validate";

import { index, create, update, remove, userBasket}  from "../controllers/Basket";
import { createValidation, updateValidation}  from "../validations/Basket";
import autheticateToken  from "../middlewares/authenticate";
const router = express.Router();


router.get("/",autheticateToken,index);
//router.get("/:id", autheticateToken, index);
router.get("/user-basket",autheticateToken,userBasket);
router.post("/", autheticateToken,validate(createValidation), create);
router.patch("/:id", autheticateToken,validate(updateValidation),update);
router.delete("/:id", autheticateToken,remove);



export default router;