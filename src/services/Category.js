
const Category = require("../Models/Category");

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
const getCategorys = (id) => {
    if (id) {
        return Category.findById(id).populate(populateCategory);
    }
    return Category.find({}).populate(populateCategory);
}

const findOne = (id) => {
    return Category.findById(id);
}
const saveCategory = (category) => {
    return new Category(category).save();
}
const updateCategory = (id, category) => {
    return Category.findByIdAndUpdate(id, category, { new: true });
}
const deleteCategory = (id) => {
    return Category.findByIdAndDelete(id);
}
module.exports = {
    saveCategory,
    updateCategory,
    getCategorys,
    deleteCategory,
    findOne
}