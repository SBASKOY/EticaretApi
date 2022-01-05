const Mongoose = require("mongoose");
 // const logger=require("../scripts/logger/Category");
const LogSchema = new Mongoose.Schema({
    content:String,
    date:String
}, {
    versionKey: false, timestamps: true
});

// CategorySchema.once("save",(doc)=>{
//     logger.log({
//         level:"info",
//         message:doc
//     })
// })
module.exports = Mongoose.model("log", LogSchema);