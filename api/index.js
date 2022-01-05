
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
var cors = require('cors')
const dbLoaders = require("./loaders/index");
const events = require("./scripts/events/index");
const { UserRouter, CategoryRouter, ProductRouter, BasketRouter,LogRouter } = require("./routers/index");
dotenv.config();

const PORT = process.env.PORT || process.env.APP_PORT;

var corsOptions = {
    origin: '*',

}
dbLoaders();
events();
const app = express();

app.use("/images", express.static(path.join(__dirname,"./images")));
app.use(express.json());
app.use(cors(corsOptions));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.get("/", (req, res) => {
    res.status(200).send("Project index");
})

app.listen(PORT, () => {
    app.use("/user", UserRouter);
    app.use("/category", CategoryRouter);
    app.use("/product", ProductRouter);
    app.use("/basket", BasketRouter);
    app.use("/log", LogRouter);
    console.log(`app runnint port ${PORT}`)
})
