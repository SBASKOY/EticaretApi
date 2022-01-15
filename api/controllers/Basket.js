
const Basket = require("../services/Basket");
const ApiError = require("../errors/apiError");
const basketService = new Basket();
const index = (req, res, next) => {
    var id = req.params.id;
    basketService.get(id).then(response => {
        if (!response) {
            return next(new ApiError("Basket not found", 404));
        }
        res.status(200).send(response);
    })
        .catch(err => {
            next(new ApiError(err?.message));
        });
}

const create = (req, res, next) => {
    req.body.user_id = req.user._doc;
    basketService.findOne({
        product_id: req.body.product_id,
        user_id: req.body.user_id
    }).then(basket => {
        if (!basket) {
            return basketService.save(req.body)
                .then(response => res.status(200).send(response))
                .catch(err => {
                    next(new ApiError(err?.message));
                });
        }
        basket.quantity = req.body.quantity;
        basket.save().then(response => res.status(200).send(response))
            .catch(err => {
                next(new ApiError(err?.message));
            });
    }).catch(err => {
        next(new ApiError(err?.message));
    });

}
const update = (req, res, next) => {
    var id = req.params?.id;
    req.body.user_id = req.user._doc;
    basketService.updateWithID(id, req.body).then(response => {
        if (!response) {
            return next(new ApiError("Basket not found.", 404))
        }
        res.status(200).send(response)
    })
        .catch(err => {
            next(new ApiError(err?.message));
        });
}
const remove = (req, res,next) => {
    var id = req.params?.id;
    basketService.delete(id).then(response => res.status(200).send({
        message: "Basket deleted.."
    })).catch(err => {
            next(new ApiError(err?.message));
        });
}
const userBasket = (req, res,next) => {
    basketService.findWhere({
        user_id: req.user._doc
    }).then(response => res.status(200).send(response))
    .catch(err => {
            next(new ApiError(err?.message));
    });
}

module.exports = {
    index,
    create,
    update,
    remove,
    userBasket
}