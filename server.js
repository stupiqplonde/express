import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

import pageRouter from "./routers/pages.js"
import { initDb } from './database/database.js';

const app = express();
const port = 3000;

await initDb()

// midlleware - промежуточные слоиS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", pageRouter);


app.listen(port, () => {
    console.log('Server is running on http://localhost:3000')
})

















