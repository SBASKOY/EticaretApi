
import Product from "../Models/Product";


const productPopulate={
    path:"category_id"
}

const getProducts=(id)=>{
    if(id){
        return Product.findById(id).populate(productPopulate);
    }
    return Product.find({}).populate(productPopulate);
}


const saveProduct=(product)=>{
    return new Product(product).save();
}
const updateProduct = (id,product) => {
    return Product.findByIdAndUpdate(id,product,{new:true});
}
const deleteProduct = (id) => {
    return Product.findByIdAndDelete(id);
}
export {
    saveProduct,
    updateProduct,
    getProducts,
    deleteProduct
}