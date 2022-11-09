// var express = require('express')
// var router = express.Router()


// External dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json()); //to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true})); //to support URL-encoded bodies


// Route index page
// router.get('/', function (req, res) {
//   res.render('index')
// });

// add your routes here


// -------------------- //
// ----- S2 Test ------ //
// -------------------- //

// What is the S2 for? //
router.post('/what-s2-entitlement', function (req,res) {

  const entitlement = req.body.entitlement;

  if(entitlement === "Planned treatment") {
    res.redirect('treatment-country-planned');
  } else if (entitlement === "Maternity benefits") {
    res.redirect('treatment-country-maternity');
  } else {
    res.redirect('what-s2-entitlement-error');
  }
});


// What country are they having treatment in?

router.post(['admin/s2/countryMaternity', 'admin/s2/countryPlanned'], function (req, res) {

  var treatmentCountry = req.session.data['eu-location-picker-1'];
  console.log(treatmentCountry);

  if (treatmentCountry == 'Austria' || treatmentCountry == 'Belgium' || treatmentCountry == 'Bulgaria' || treatmentCountry == 'Croatia' || treatmentCountry == 'Cyprus' || treatmentCountry == 'Czech Republic' || treatmentCountry == 'Denmark' || treatmentCountry == 'Finland' || treatmentCountry == 'France' || treatmentCountry == 'Germany') {
    res.redirect('active-s1')
  }
  if (treatmentCountry == 'Greece' || treatmentCountry == 'Hungary' || treatmentCountry == 'Iceland' || treatmentCountry == 'Italy' || treatmentCountry == 'Latvia' || treatmentCountry == 'Liechtenstein' || treatmentCountry == 'Lithuania' || treatmentCountry == 'Luxembourg' || treatmentCountry == 'Malta' || treatmentCountry == 'Netherlands') {
    res.redirect('active-s1')
  }
  if (treatmentCountry == 'Norway' || treatmentCountry == 'Poland' || treatmentCountry == 'Portugal' || treatmentCountry == 'Republic of Ireland' || treatmentCountry == 'Romania' || treatmentCountry == 'Slovakia' || treatmentCountry == 'Slovenia' || treatmentCountry == 'Spain' || treatmentCountry == 'Sweden' || treatmentCountry == 'Switzerland') {
    res.redirect('active-s1')
  }
  if (treatmentCountry == '') {
    res.redirect('what-s2-entitlement')
  }
  else {
    res.redirect('kickouts/ineligible-treatment-country')
  }
})

// What country are they having treatment in?

router.post('admin/s2/countrySOne', function (req, res) {

  var countrySOne = req.session.data['location-picker-1'];
  console.log(countrySOne);

  if (countrySOne == 'Cyprus' || countrySOne == 'Finland' || countrySOne == 'Iceland' || countrySOne == 'Ireland' || countrySOne == 'Malta' || countrySOne == 'Portugal' || countrySOne == 'Spain' || countrySOne == 'Sweden' || countrySOne == 'Netherlands') {
    res.redirect('kickouts/ineligible-s1-country')
  }
  if (countrySOne == '') {
    res.redirect('country-s1')
  }
  else {
    res.redirect('nationality')
  }
})

module.exports = router