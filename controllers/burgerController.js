const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();


//Create routes and set up logic within routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});