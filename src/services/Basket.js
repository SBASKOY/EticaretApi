
const BasketModel = require("../Models/Basket");

const BaseService= require("./BaseService");

class Basket extends BaseService {
    constructor(){
        super(BasketModel);
        this.basketPopulate = {
            path: "product_id"
        }
    }
    get(id) {
        if (id) {
            return BasketModel.findById(id).populate(this.basketPopulate)
        }
        return BasketModel.find({}).populate(this.basketPopulate)
    }
    findWhere(where) {
        return BasketModel.find(where).populate(this.basketPopulate)
    }
}

module.exports = Basket;