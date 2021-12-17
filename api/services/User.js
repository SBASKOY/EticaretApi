
const UserModel=require("../Models/User");
const BaseService = require("./BaseService");

class User extends BaseService {
    constructor() {
        super(UserModel);
    }
}



module.exports = User;