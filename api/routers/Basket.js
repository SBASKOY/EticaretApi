
const express = require("express");
const validate=require("../middlewares/validate");

const { index, create, update, remove, userBasket} = require("../controllers/Basket");
const { createValidation, updateValidation} =require("../validations/Basket");
const autheticateToken = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const router = express.Router();


router.get("/",autheticateToken,index);
//router.get("/:id", autheticateToken, index);
router.get("/user-basket",autheticateToken,userBasket);
router.post("/", autheticateToken,validate(createValidation), create);
router.patch("/:id", autheticateToken,idChecker,validate(updateValidation),update);
router.delete("/:id", autheticateToken,idChecker,remove);



module.exports = router;