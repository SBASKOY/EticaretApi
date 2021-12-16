
import { saveProduct, updateProduct, getProducts,deleteProduct } from "../services/Product";

const index = (req:any, res:any) => {
    var id=req.params.id;
    getProducts(id).then((response:any)=>res.status(200).send(response))
        .catch((err:any) => res.status(500).send(err));
}

const create = (req:any, res:any) => {
    saveProduct(req.body).then((response:any) => res.status(200).send(response))
        .catch((err:any) => res.status(500).send(err));
}
const update = (req:any, res:any) => {
    var id=req.params?.id;
    updateProduct(id, req.body).then((response:any) => res.status(200).send(response))
        .catch((err:any) => res.status(500).send(err));
}
const remove = (req:any, res:any) => {
    var id = req.params?.id;
    deleteProduct(id).then((response:any) => res.status(200).send({
        message:"Product deleted.."
    }))
        .catch((err:any) => res.status(500).send(err));
}

export {
    index,
    create,
    update,
    remove
}