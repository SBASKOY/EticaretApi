
import  User from "../Models/User";
const getUsers=(id:String)=>{
    if(id){
        return User.findById(id);
    }
    return User.find({});
}

const findWhere=(where:Object)=>{
    return User.find(where);
}
const findOne = (where:Object) => {
    return User.findOne(where);
}
const saveUser=(user:Object)=>{
    return new User(user).save();
}
const updateUser = (id: String, user: any) => {
    return User.findByIdAndUpdate(id,user,{new:true});
}
const deleteUser = (id:String) => {
    return User.findByIdAndDelete(id);
}
const modify=(where:Object,data:any)=>{
    return User.findOneAndUpdate(where,data,{new:true});
}

export  {
    saveUser,
    updateUser,
    getUsers,
    deleteUser,
    findOne,
    modify
}