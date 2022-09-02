
import express from "express";
import path from "path";
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import router from "./routes/index.js";
import cors from "cors";



const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);


export default app;