
const CategoryModel = require("../Models/Category");
const BaseService = require("./BaseService");
const fs=require("fs");

const populateCategory = {
    path: "sub_categorys",
    populate: {
        path: 'sub_categorys',
        populate: {
            path: 'sub_categorys',
            populate: {
                path: 'sub_categorys',
                populate: {
                    path: 'sub_categorys',
                    populate: {
                        path: 'sub_categorys',
                        populate: {
                            path: 'sub_categorys',
                            populate: {
                                path: 'sub_categorys',
                            }
                        }
                    }
                }
            }
        }
    }
};
class Category extends BaseService {
    constructor(){
        super(CategoryModel);
    }
    get(id) {
        if (id) {
            return CategoryModel.findById(id).populate(populateCategory);
        }
        return CategoryModel.find({}).populate(populateCategory);
    }
 
}

module.exports = Category;