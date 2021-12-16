import  dbLoaders  from './loaders/index';
import express, { Request, Response } from 'express';

import dotenv from 'dotenv';
import {UserRouter} from './routers/index';

dotenv.config();
dbLoaders();

const app = express();
const PORT = process.env.APP_PORT ?? 2000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Projeck index")
})

app.listen(PORT, () => {
    app.use("/user",UserRouter);
    console.log(`Server running port ${PORT}.`);
});