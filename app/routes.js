var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

// add your routes here
// ccs no-search-results uk-pension //
router.get(/ccs-benefit/, function (req,res){
  if(req.query.pension === "yes"){
    res.redirect('pension-date');
  } else if(req.query.pension === "no") {
    res.redirect('not-entitled-2');
  } else {
    res.redirect('pension-date');
  }
});

// ccs search-results uk-pension //
router.get(/new-person-ccs-bens/, function (req,res){
  if(req.query.pension === "yes"){
    res.redirect('pension-date-2');
  } else if(req.query.pension === "no") {
    res.redirect('not-entitled-2');
  } else {
    res.redirect('pension-date-2');
  }
});

// ccs no-search-results member-state-pension //
router.get(/same-pension-form/, function (req,res){
  if(req.query.samePensionCountry === "yes"){
    res.redirect('not-entitled');
  }
  else {
    res.redirect('another-pension');
  }
});

// ccs search-results member-state-pension //
router.get(/new-person-member-state-pension/, function (req,res){
  if(req.query.samePensionCountry === "yes"){
    res.redirect('not-entitled');
  }
  else {
    res.redirect('another-pension-2');
  }
});

router.get(/admin-second-pension/, function (req,res){
  if(req.query.samePensionCountry === "yes"){
    res.redirect('not-entitled');
  }
  else {
    res.redirect('another-pension-2');
  }
});

// admin no-search-results third-country-pension //
router.get(/another-pension-form/, function (req,res){
  if(req.query.anotherCountry === "yes") {
    res.redirect('check-your-answers');
  }
  else {
    res.redirect('check-your-answers');
  }
});

router.get(/new-person-third-country-pension/, function (req,res){
  if(req.query.anotherCountry === "yes") {
    res.redirect('check-your-answers-2');
  }
  else {
    res.redirect('check-your-answers-2');
  }
});

// admin no-search-results exportable-benefits //
router.get(/ccs-admin/, function (req,res){
  if(req.query.pension === "pension"){
    res.redirect('pension-date');
  } else if(req.query.pension !== "pension") {
    res.redirect('benefit-date');
  } else {
    res.redirect('benefit-date');
  }
});

// admin search-results exportable-benefits //
router.get(/new-person-admin/, function (req,res){
  if(req.query.pension === "pension"){
    res.redirect('pension-date-2');
  } else if(req.query.pension !== "pension") {
    res.redirect('benefit-date-2');
  } else {
    res.redirect('benefit-date-2');
  }
});

router.get(/address-pension-form/, function (req,res){
  if(req.query.anotherCountry === "yes") {
    res.redirect('new-address');
  }
  else {
    res.redirect('new-address');
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
  if(req.query.radiobs === "moving"){
    res.redirect('benefit-info');
  }
});

router.get(/cancel-source/, function (req,res){
  if(req.query.cancel === "UK"){
    res.redirect('cancel-reason-uk');
  } else if(req.query.cancel === "Member state") {
    res.redirect('cancel-reason-ms');
  } else if(req.query.cancel === "Customer") {
    res.redirect('cancel-reason-cust');
  } else if(req.query.cancel === "HMRC") {
    res.redirect('cancel-reason-hmrc');
  } else if(req.query.cancel === "Dept of Pensions") {
    res.redirect('cancel-reason-dwp');
  } else {
    res.redirect('cancel-entitlement');
  }
});

router.get(/reprint-reasons/, function (req,res){
  if(req.query.reprint === "Member state"){
    res.redirect('reprint-ms-reason');
  } else {
    res.redirect('reprint-reason');
  }
});

// EHIC //

// UK resident //

router.get(/resident/, function (req,res){
  if(req.query.resident === "yes") {
    res.redirect('eligible');
  }
  else {
    res.redirect('remain');
  }
});

router.get(/applyrenew/, function (req,res){
  if(req.query.applyrenew === "yes") {
    res.redirect('ehic-number');
  }
  else {
    res.redirect('name');
  }
});

router.get(/customers/, function (req,res){
  if(req.query.customers === "travel"){
    res.redirect('ehic-eligbility');
  } else if(req.query.customers === "moving") {
    res.redirect('moving-eligibility');
  } else if(req.query.customers === "working") {
    res.redirect('working-eligibility');
  } else if(req.query.customers === "planned") {
    res.redirect('planned-eligibility');
  } else if(req.query.customers === "accident") {
    res.redirect('ehic-eligibility');
  } else {
    res.redirect('customers');
  }
});
    
router.get(/resident/, function (req,res){
  if(req.query.resident === "yes") {
    res.redirect('prc');
  }
  else {
    res.redirect('ehic');
  }
});
// EHIC //

module.exports = router
