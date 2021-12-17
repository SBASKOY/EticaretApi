const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Product");
const ProductSchema = new Mongoose.Schema({
    title: String,
    sub_title: String,
    product_number: String,
    category_id: {
        type: Mongoose.Types.ObjectId,
        ref: "category"
    },
    tags: [String],
    sub_products: [
        {
            likes: {
                type: Number,
                default: 0
            },
            sub_product_number: String,
            price: Number,
            sales_price: Number,
            images: [String],
            color: String,
            sizes: [{
                size: String,
                count: Number,
            }],
            information: String
        }
    ],
}, {
    versionKey: false, timestamps: true
});

ProductSchema.once("save", (doc) => {
    logger.log({
        level: "info",
        message: doc
    })
})

module.exports = Mongoose.model("product", ProductSchema);