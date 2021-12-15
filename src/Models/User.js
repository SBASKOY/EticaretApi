
const Mongoose=require("mongoose");
const logger=require("../scripts/logger/User");
const UserSchema=new Mongoose.Schema({
    name:String,
    surname:String,
    username:String,
    password:String,
    email:String,
    phone:String,
    gender:String,
    birtday:Date,

},{
    versionKey: false, timestamps: true
});
UserSchema.once("save",(doc)=>{
    logger.Date.log({
        level:"info",
        message:doc
    })
})
module.exports=Mongoose.model("user",UserSchema);