// var express = require('express')
// var router = express.Router()


// External dependencies
const express = require('express');
const router = express.Router();


// Route index page
// router.get('/', function (req, res) {
//   res.render('index')
// });

// add your routes here


// Start folder specific routes
// router.use('/v13_0', require('./views/v13_0/_routes'));


// Does your durable have EU settled or pre-settled status? - add dep to EHIC
router.get(/checkPensionDate/, function (req,res) {
  if(req.query.checkPensionDate === "yes") {
    res.redirect('dwp-check-results');
  } else if (req.query.checkPensionDate === "no") {
    res.redirect('cancel-date-blank');
  } else {
    res.redirect('check-pension-date');
  }
});




module.exports = router