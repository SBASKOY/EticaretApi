const cloudinary = require("cloudinary");
const Slider = require("../services/Slider");
const ApiError = require("../errors/apiError");

const sliderService = new Slider();
const index = (req, res, next) => {
    var id = req.params.id;
    sliderService.get(id).then(response => {
        if (!response) {
            return next(new ApiError("Basket not found", 404));
        }
        res.status(200).send(response);
    }).catch(err => {
        next(new ApiError(err?.message));
    });
}

const create = (req, res, next) => {
    req.body.user_id = req.user._doc;
    if (!req.files?.slider_image) {
        return next(new ApiError("slider_image is required in form data"));
    }
    cloudinary.uploader.upload(req.files.slider_image.tempFilePath, (result) => {
        if (result.public_id) {
            return sliderService.save({
                image: result.secure_url,
                public_id: result.public_id,
                order: req.body.order ?? 0
            }).then(response => {
                return res.status(200).send(response);
            }).catch(err => {
                next(new ApiError(err?.message));
            });
        }
        next(new ApiError("Image not saved."));
    }, { folder: 'slider' });
}
const update = (req, res, next) => {
    var id = req.params?.id;
    req.body.user_id = req.user._doc;
    sliderService.updateWithID(id, req.body).then(response => {
        if (!response) {
            return next(new ApiError("Slider not found.", 404))
        }
        res.status(200).send(response)
    }).catch(err => {
        next(new ApiError(err?.message));
    });
}
const remove = (req, res, next) => {
    var id = req.params?.id;
    sliderService.findById(id).then(slider => {
        if (!slider) return next(new ApiError("slider not found", 404));
        cloudinary.uploader.destroy(slider.public_id, (err, result) => {
            return sliderService.delete(id).then(response => res.status(200).send({
                message: "Slider deleted.."
            })).catch(e => {
                next(new ApiError(e?.message));
            });
        });
    }).catch(e => {
        next(new ApiError(e?.message));
    });
}
module.exports = {
    index,
    create,
    update,
    remove

}