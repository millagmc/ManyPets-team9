import express from "express";
const router = express.Router();

import {dummydata} from "../libs/data.js"


router.get('/api/quotes', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    message: "success",
    payload: dummydata
  })
});

router.get('/api/quotes/:id', function(req, res, next) {
 
  const {id} = req.params
  const setId = Number(id)
  console.log(setId)
  res.json({
    message: "success",
    payload: dummydata
  })
});

export default router; 
