

const Category = require("../services/Category");
const categoryService = new Category();

const index = (req, res) => {
    var id = req.params.id;
    categoryService.get(id).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}

const create = (req, res) => {
    categoryService.save(req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const update = (req, res) => {
    var id = req.params?.id;
    categoryService.updateWithID(id, req.body).then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
}
const remove = (req, res) => {
    var id = req.params?.id;
    categoryService.delete(id).then(response => res.status(200).send({
        message: "Category deleted.."
    })).catch(err => res.status(500).send(err));
}

const addSubCategory = (req, res) => {
    categoryService.findById( req.params?.id).then(mainCategory => {
        if (!mainCategory) {
            return res.status(404).send({
                message: "Category not found"
            });
        }
        categoryService.save(req.body).then(subCategory => {
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