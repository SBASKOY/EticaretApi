
const express = require("express");
const validate=require("../middlewares/validate");

const { index, create, update, remove, addSubCategory} = require("../controllers/Category");
const { createValidation, updateValidation} =require("../validations/Category");
const autheticateToken = require("../middlewares/authenticate");
const router = express.Router();


router.get("/",index);
router.get("/:id",index);
router.post("/", autheticateToken,validate(createValidation), create);
router.post("/:id/add-sub-category", autheticateToken, validate(createValidation), addSubCategory);
router.patch("/:id", autheticateToken,validate(updateValidation),update);
router.delete("/:id", autheticateToken,remove);



module.exports = router;