import express from "express";
const router = express.Router();

import {dummydata} from "../libs/data.js"


router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    message: "success",
    payload: dummydata
  })
});

export default router; 
