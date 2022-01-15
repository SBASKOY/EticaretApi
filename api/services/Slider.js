
const SliderModel = require("../Models/Slider");

const BaseService= require("./BaseService");

class Slider extends BaseService {
    constructor(){
       super(SliderModel)
    }
    
}

module.exports = Slider;