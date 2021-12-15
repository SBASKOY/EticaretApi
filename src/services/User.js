
const User=require("../Models/User");


const getUsers=(id)=>{
    if(id){
        return User.findById(id);
    }
    return User.find({});
}

const findWhere=(where)=>{
    return User.find(where);
}
const findOne = (where) => {
    return User.findOne(where);
}
const saveUser=(user)=>{
    return new User(user).save();
}
const updateUser = (id,user) => {
    return User.findByIdAndUpdate(id,user,{new:true});
}
const deleteUser = (id) => {
    return User.findByIdAndDelete(id);
}
const modify=(where,data)=>{
    return User.findOneAndUpdate(where,data,{new:true});
}

module.exports={
    saveUser,
    updateUser,
    getUsers,
    deleteUser,
    findOne,
    modify
}