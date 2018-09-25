var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

// add your routes here

router.get(/same-pension-form/, function (req,res){
  if(req.query.samePensionCountry === "yes"){
    res.redirect('not-entitled');
  }
  else {
    res.redirect('another-pension');
  }
});

router.get(/another-pension-form/, function (req,res){
  if(req.query.anotherCountry === "yes"){
    res.redirect('contact3rd');
  }
  else {
    res.redirect('contact-address');
  }
});

router.get(/dependant-age-form/, function (req,res){
  if(req.query.dependantAge === "yes"){
    res.redirect('search2');
  }
  else {
    res.redirect('search1');
  }
});

module.exports = router
