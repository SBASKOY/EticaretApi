
import express from "express";
import validate from "../middlewares/validate";

import { index, create, update, remove, addSubCategory} from "../controllers/Category";
import { createValidation, updateValidation} from "../validations/Category";
import autheticateToken from "../middlewares/authenticate";
const router = express.Router();


router.get("/",index);
router.get("/:id",index);
router.post("/", autheticateToken,validate(createValidation), create);
router.post("/:id/add-sub-category", autheticateToken, validate(createValidation), addSubCategory);
router.patch("/:id", autheticateToken,validate(updateValidation),update);
router.delete("/:id", autheticateToken,remove);



export default router;