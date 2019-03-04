'use strict';

const express = require('express');
const router = express.Router();

const varTitle = process.env.TITLE || 'Deployed through Wipro Digital Rig on PolyCloud Infrastructure';
const varMessage = process.env.MESSAGE || 'Hello world!';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: varTitle, message: varMessage });
});

module.exports = router;
