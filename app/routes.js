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


module.exports = router
