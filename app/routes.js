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
    // res.redirect('contact-address2');
    res.redirect('check-your-answers');
  }
  else {
    //   res.redirect('contact-address');
    res.redirect('check-your-answers');
  }
});

router.get(/dependant-age-form/, function (req,res){
  if(req.query.dependantAge === "yes"){
    res.redirect('search');
  }
  else {
    res.redirect('search2');
  }
});

router.get(/update-entitlement-form/, function (req,res){
  if(req.query.updateEntitlement === "yes"){
    res.redirect('check-person-details');
  }
  else {
    res.redirect('search2-results');
  }
});

router.get(/abc-2/, function (req,res){
  if(req.query.updateEntitlement === "Yes - continue to record"){
    res.redirect('case-record');
  }
});

router.get(/create-handler/, function (req,res){
  if(req.query.radiobs === "PRC"){
    res.redirect('https://prc-prototype.herokuapp.com');
  }
  if(req.query.radiobs === "Moving"){
    res.redirect('benefit-info');
  }
});

module.exports = router
