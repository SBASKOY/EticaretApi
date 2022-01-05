
const express = require("express");
const { index, create} = require("../controllers/Log");

const router = express.Router();


router.get("/",index);
router.get("/:id",index);
router.post("/", create);




module.exports = router;