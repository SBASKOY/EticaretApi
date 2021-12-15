const Mongoose = require("mongoose");
const logger=require("../scripts/logger/Category");
const CategorySchema = new Mongoose.Schema({
    name: String,
    order:Number,
    sub_categorys:[
        {
            type:Mongoose.Types.ObjectId,
            ref:"category"
        }
    ]

}, {
    versionKey: false, timestamps: true
});

CategorySchema.once("save",(doc)=>{
    logger.log({
        level:"info",
        message:doc
    })
})
module.exports = Mongoose.model("category", CategorySchema);