
const Mongoose = require("mongoose");

const SliderSchema=new Mongoose.Schema({
    image:String,
    public_id:String,
    order:Number
}, {
    versionKey: false, timestamps: true
});
module.exports = Mongoose.model("slider", SliderSchema);