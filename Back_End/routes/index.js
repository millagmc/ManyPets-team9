import express from 'express';
const router = express.Router();

import { dummydata } from '../libs/data.js';

router.get('/api/quotes', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    message: 'success',
    payload: dummydata,
  });
});

router.get('/api/quotes/:id', async function (req, res, next) {
  const { id } = req.params;
  const setId = Number(id);
  const data = await callId(setId);

  async function callId(setId) {
    return dummydata.filter((input) => {
      {
        if (input.id === setId) {
          console.log(input);
          return input;
        }
      }
    });
  }
  res.json({
    message: 'success',
    payload: { data },
  });
});

export default router;
