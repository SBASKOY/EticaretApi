const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
    console.log("db connection success");
});
const connectDb = async () => {

    console.log(process.env.DB_HOST || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    await Mongoose.connect(process.env.DB_HOST || `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
}
module.exports = connectDb;