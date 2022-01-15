


const cloudinary = require("cloudinary");
const Category = require("../services/Category");
const ApiError = require("../errors/apiError");
const categoryService = new Category();
const index = (req, res, next) => {
    var id = req.params.id;
    categoryService.get(id).then(response => {
        if (!response) {
            return next(new ApiError("Category not found", 404));
        }
        res.status(200).send(response)
    })
        .catch(e => {
            next(new ApiError(e?.message));
        });
}

const create = (req, res, next) => {

    categoryService.save(req.body).then(response => res.status(200).send(response))
        .catch(e => {
            next(new ApiError(e?.message));
        });
}
const update = (req, res, next) => {
    var id = req.params?.id;
    categoryService.updateWithID(id, req.body).then(response => res.status(200).send(response))
        .catch(e => {
            next(new ApiError(e?.message));
        });
}
const remove = (req, res, next) => {
    var id = req.params?.id;
    categoryService.findById(id).then(category => {

        if (!category) return next(new ApiError("Category not found",404));
        // const folderPath = path.join(__dirname, "../", "./images", `${}`);
        category.sub_categorys.forEach(element => {
            console.log(element.image_id);
            cloudinary.uploader.destroy(element.image_id, (err, result) => {
                console.log(err);
                categoryService.delete(element._id).then(a => {
                    console.log(a)
                }).catch(err => {
                    console.log(err);
                })
            });
        })
        cloudinary.uploader.destroy(category.image_id, (err, result) => {
            return categoryService.delete(id).then(response => res.status(200).send({
                message: "Category deleted.."
            })).catch(e => {
                next(new ApiError(e?.message));
            });
        });
    }).catch(e => {
        next(new ApiError(e?.message));
    });

}

const addSubCategory = (req, res, next) => {
    categoryService.findById(req.params?.id).then(mainCategory => {
        if (!mainCategory) {
            return res.status(404).send({
                message: "Category not found"
            });
        }
        categoryService.save(req.body).then(subCategory => {
            mainCategory.sub_categorys.push(subCategory);
            mainCategory.save().then(updatedCategory => {
                res.status(200).send(updatedCategory);
            }).catch(e => {
                next(new ApiError(e?.message));
            });
        }).catch(e => {
            next(new ApiError(e?.message));
        });
    }).catch(e => {
        next(new ApiError(e?.message));
    });
}
const addCategoryImage = (req, res, next) => {
    const id = req.params.id;
    if (!req.files?.category_image) {
        return next(new ApiError("category_image is required in form data"));
    }
    categoryService.findById(id).then(category => {
        if (!category) {
            return res.status(404).send("category not found");
        }
        cloudinary.uploader.destroy(category.image_id, (err) => {
            cloudinary.uploader.upload(req.files.category_image.tempFilePath, (result) => {
                if (result.public_id) {
                    return categoryService.updateWithID(id, {
                        image: result.secure_url,
                        image_id: result.public_id,
                        asset_id: result.asset_id
                    }).then(response => {
                        res.status(200).send(response);
                    }).catch(err => {
                        next(new ApiError(err?.message));
                    });
                }
                return res.status(500).send("image kayıt edilemedi");
            }, { folder: 'category' });
        });
    })

}

module.exports = {
    index,
    create,
    update,
    remove,
    addSubCategory,
    addCategoryImage
}