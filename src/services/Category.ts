
import Category from "../Models/Category";

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
const getCategorys = (id:any) => {
    if (id) {
        return Category.findById(id).populate(populateCategory);
    }
    return Category.find({}).populate(populateCategory);
}

const findOne = (id:any) => {
    return Category.findById(id);
}
const saveCategory = (category:any) => {
    return new Category(category).save();
}
const updateCategory = (id:any, category:any) => {
    return Category.findByIdAndUpdate(id, category, { new: true });
}
const deleteCategory = (id:any) => {
    return Category.findByIdAndDelete(id);
}
export  {
    saveCategory,
    updateCategory,
    getCategorys,
    deleteCategory,
    findOne
}