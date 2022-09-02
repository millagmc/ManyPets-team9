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


  function callId(setId) {
    if (setId === dummydata.id){
      res.json({
        message: "success",
        payload: dummydata
      })
    } else {
      return ('Data does not exist')
    }
    
  }  

  callId(setId)
 
});

export default router; 
