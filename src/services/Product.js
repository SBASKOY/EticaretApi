
const ProductModel=require("../Models/Product");

const BaseService = require("./BaseService");

const productPopulate = {
    path: "category_id"
}
class Product extends BaseService{
    constructor(){
        super(ProductModel);
    }
    get(id) {
        if (id) {
            return ProductModel.findById(id).populate(productPopulate);
        }
        return ProductModel.find({}).populate(productPopulate);
    }
}





module.exports = Product;