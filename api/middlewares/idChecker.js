
const ApiError=require("../errors/apiError");

const idChecker=(req,res,next)=>{
    if (!req?.params?.id?.match(/^[0-9a-fA-F]{24}$/)){
        return next(new ApiError("id is not correct"),400);
    }
    next();
}
module.exports = idChecker;