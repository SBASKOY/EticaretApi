
const express = require("express");
const validate=require("../middlewares/validate");

const {index,create, update, remove } = require("../controllers/Product");
const { createValidation, updateValidation} =require("../validations/Product");
const autheticateToken = require("../middlewares/authenticate");
const router = express.Router();


router.get("/",index);
router.get("/:id",index);
router.post("/", autheticateToken,validate(createValidation), create);
router.patch("/:id", autheticateToken,validate(updateValidation),update);
router.delete("/:id", autheticateToken,remove);



module.exports = router;