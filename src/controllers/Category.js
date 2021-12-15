
const { saveCategory, updateCategory, getCategorys, deleteCategory, findOne } = require("../services/Category");

const index = (req, res) => {
    var id = req.params.id;
    getCategorys(id).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}

const create = (req, res) => {
    saveCategory(req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const update = (req, res) => {
    var id = req.params?.id;
    updateCategory(id, req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const remove = (req, res) => {
    var id = req.params?.id;
    deleteCategory(id).then(response => res.status(200).send({
        message: "Category deleted.."
    })).catch(err => res.status(500).send(err));
}

const addSubCategory = (req, res) => {
    findOne(req.params?.id).then(mainCategory => {
        if (!mainCategory) {
            return res.status(404).send({
                message: "Category not found"
            });
        }
        saveCategory(req.body).then(subCategory => {
            mainCategory.sub_categorys.push(subCategory);
            mainCategory.save().then(updatedCategory => {
                res.status(200).send(updatedCategory);
            }).catch(err => res.status(500).send(err));
        }).catch(err => res.status(500).send(err));
    }).catch(err => res.status(500).send(err));
}

module.exports = {
    index,
    create,
    update,
    remove,
    addSubCategory
}