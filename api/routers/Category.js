
const express = require("express");
const validate=require("../middlewares/validate");

const { index, create, update, remove, addSubCategory, addCategoryImage} = require("../controllers/Category");
const { createValidation, updateValidation} =require("../validations/Category");
const autheticateToken = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const router = express.Router();


router.get("/",index);
router.get("/:id",idChecker,index);
router.post("/", autheticateToken,validate(createValidation), create);
router.post("/:id/add-sub-category", autheticateToken, idChecker, validate(createValidation), addSubCategory);
router.post("/:id/add-image", autheticateToken, idChecker,addCategoryImage);
router.patch("/:id", autheticateToken,idChecker,validate(updateValidation),update);
router.delete("/:id", autheticateToken,idChecker,remove);



module.exports = router;