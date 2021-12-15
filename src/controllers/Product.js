
const { saveProduct, updateProduct, getProducts,deleteProduct } = require("../services/Product");

const index = (req, res) => {
    var id=req.params.id;
    getProducts(id).then(response=>res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}

const create = (req, res) => {
    saveProduct(req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const update = (req, res) => {
    var id=req.params?.id;
    updateProduct(id,req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const remove = (req, res) => {
    var id = req.params?.id;
    deleteProduct(id).then(response => res.status(200).send({
        message:"Product deleted.."
    }))
        .catch(err => res.status(500).send(err));
}

module.exports={
    index,
    create,
    update,
    remove
}