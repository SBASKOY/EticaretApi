
const { saveBasket, updateBasket, getBaskets, deleteBasket, getBasketUser, findOne } = require("../services/Basket");

const index = (req, res) => {
    var id = req.params.id;
    getBaskets(id).then(response => {
        if (!response) {
            res.status(404).send({
                message: "Basket not found"
            });
        }
        res.status(200).send(response);
    })
        .catch(err => res.status(500).send(err));
}

const create = (req, res) => {
    req.body.user_id = req.user._doc;
    findOne({
        product_id: req.body.product_id,
        user_id: req.body.user_id
    }).then(basket => {
        if (!basket) {
            return saveBasket(req.body).then(response => res.status(200).send(response))
                .catch(err => res.status(500).send(err));
        }
        basket.quantity = req.body.quantity;
        basket.save().then(response => res.status(200).send(response))
            .catch(err => res.status(500).send(err));
    }).catch(err => res.status(500).send(err));

}
const update = (req, res) => {
    var id = req.params?.id;
    req.body.user_id = req.user._doc;
    updateBasket(id, req.body).then(response =>{
        if(!response){
            return res.status(404).send({message:"Basket not found"});
        }
        res.status(200).send(response)
    })
        .catch(err => res.status(500).send(err));
}
const remove = (req, res) => {
    var id = req.params?.id;
    deleteBasket(id).then(response => res.status(200).send({
        message: "Basket deleted.."
    }))
        .catch(err => res.status(500).send(err));
}
const userBasket = (req, res) => {


    getBasketUser(req.user._doc).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}

module.exports = {
    index,
    create,
    update,
    remove,
    userBasket
}