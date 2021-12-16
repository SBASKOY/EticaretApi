
import { saveCategory, updateCategory, getCategorys, deleteCategory, findOne } from "../services/Category";

const index = (req:yalnız bu kod böyle yazılmaz, res:any) => {
    var id = req.params.id;
    getCategorys(id).then((response:any) => res.status(200).send(response))
        .catch((err: any) => res.status(500).send(err));
}

const create = (req:any, res:any) => {
    saveCategory(req.body).then((response:any) => res.status(200).send(response))
        .catch((err:any) => res.status(500).send(err));
}
const update = (req:any, res:any) => {
    var id = req.params?.id;
    updateCategory(id, req.body).then((response:any) => res.status(200).send(response))
        .catch((err:any) => res.status(500).send(err));
}
const remove = (req:any, res:any) => {
    var id = req.params?.id;
    deleteCategory(id).then((response:any) => res.status(200).send({
        message: "Category deleted.."
    })).catch((err:any) => res.status(500).send(err));
}

const addSubCategory = (req:any, res:any) => {
    findOne(req.params?.id).then((mainCategory:any) => {
        if (!mainCategory) {
            return res.status(404).send({
                message: "Category not found"
            });
        }
        saveCategory(req.body).then((subCategory:any) => {
            mainCategory.sub_categorys.push(subCategory);
            mainCategory.save().then((updatedCategory:any) => {
                res.status(200).send(updatedCategory);
            }).catch((err:any) => res.status(500).send(err));
        }).catch((err: any) => res.status(500).send(err));
    }).catch((err: any) => res.status(500).send(err));
}

export  {
    index,
    create,
    update,
    remove,
    addSubCategory
}