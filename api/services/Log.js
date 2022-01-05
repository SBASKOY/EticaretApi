
const LogModel = require("../Models/Log");

const BaseService= require("./BaseService");

class Log extends BaseService {
    constructor(){
        super(LogModel);
    }
   
}

module.exports = Log;