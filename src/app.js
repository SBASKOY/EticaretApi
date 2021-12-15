
const express = require("express");
const dotenv = require("dotenv");

const dbLoaders = require("./loaders/index");
const events=require("./scripts/events/index");
const { UserRouter, CategoryRouter, ProductRouter, BasketRouter } = require("./routers/index");
dotenv.config();

const PORT = process.env.APP_PORT || 5000;

dbLoaders();
events();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).send("Project index");
})

app.listen(PORT, () => {
    app.use("/user", UserRouter);
    app.use("/category", CategoryRouter);
    app.use("/product", ProductRouter);
    app.use("/basket", BasketRouter);
    console.log(`app runnint port ${PORT}`)
})
