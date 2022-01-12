
const Product = require("../services/Product");
const productService = new Product();
const ApiError=require("../errors/apiError");
const index = (req, res,next) => {
    var id=req.params.id;
    productService.get(id).then(response=>{
        if (!response) return next(new ApiError("Product not found",404))
        res.status(200).send(response)
    }).catch(err => {
            next(new ApiError(err?.message));
        });
}

const create = (req, res,next) => {
    productService.save(req.body).then(response => res.status(200).send(response))
        .catch(err => {
            next(new ApiError(err?.message));
        });
}
const update = (req, res,next) => {
    var id=req.params?.id;
    productService.updateWithID(id,req.body)
    .then(response => res.status(200).send(response))
    .catch(err => {
        next(new ApiError(err?.message));
    });
}
const remove = (req, res,next) => {
    var id = req.params?.id;
    productService.delete(id).then(response => res.status(200).send({
        message:"Product deleted.."
    }))
    .catch(err => {
        next(new ApiError(err?.message));
    });
}

module.exports={
    index,
    create,
    update,
    remove
}