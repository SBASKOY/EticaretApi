
const express = require("express");
const validate=require("../middlewares/validate");

const { index, create, update, remove} = require("../controllers/Slider");
const autheticateToken = require("../middlewares/authenticate");
const idChecker = require("../middlewares/idChecker");
const router = express.Router();


router.get("/",index);
router.get("/:id",idChecker,index);
router.post("/", autheticateToken, create);
router.patch("/:id", autheticateToken,idChecker,update);
router.delete("/:id", autheticateToken,idChecker,remove);



module.exports = router;