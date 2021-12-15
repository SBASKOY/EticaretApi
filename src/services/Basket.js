
const Basket = require("../Models/Basket");


const basketPopulate = {
    path: "product_id"
}

const getBaskets = (id) => {
    if (id) {
        return Basket.findById(id).populate(basketPopulate);
    }
    return Basket.find({}).populate(basketPopulate);
}
const getBasketUser = (user) => {
    return Basket.find({
        user_id: user
    }).populate(basketPopulate);
}

const findOne = (where) => {
    return Basket.findOne(where);
}

const saveBasket = (basket) => {

    return new Basket(basket).save();
}
const updateBasket = (id, basket) => {
    return Basket.findByIdAndUpdate(id, basket, { new: true });
}
const deleteBasket = (id) => {
    return Basket.findByIdAndDelete(id);
}
module.exports = {
    saveBasket,
    updateBasket,
    getBaskets,
    deleteBasket,
    getBasketUser,
    findOne
}