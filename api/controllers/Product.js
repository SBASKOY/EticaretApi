
const Product = require("../services/Product");
const productService = new Product();

const index = (req, res) => {
    var id=req.params.id;
    productService.get(id).then(response=>{
        if (!response) return res.status(404).send({error:"Product not found"});
        res.status(200).send(response)
    })
        .catch(err => res.status(500).send(err));
}

const create = (req, res) => {
    productService.save(req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const update = (req, res) => {
    var id=req.params?.id;
    productService.updateWithID(id,req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const remove = (req, res) => {
    var id = req.params?.id;
    productService.delete(id).then(response => res.status(200).send({
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