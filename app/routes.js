var express = require('express')
var router = express.Router()

// External dependencies
// const express = require('express');
// const router = express.Router();

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});


// add your routes here

// Start folder specific routes
router.use('/v13_0', require('./views/v13_0/_routes'));

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

router.get(/new-person-third-country-pension/, function (req,res){
  if(req.query.anotherCountry === "yes") {
    res.redirect('check-your-answers-2');
  }
  else {
    res.redirect('check-your-answers-2');
  }
});

// admin no-search-results exportable-benefits //
router.get(/exportable-benefits/, function (req,res){
  if(req.query.expbenefits === "State Pension") {
    // res.redirect('');
    res.redirect('pension-info');
  } else if((req.query.expbenefits === "Employment Support Allowance") ||
            (req.query.expbenefits === "Disability Living Allowance") ||
            (req.query.expbenefits === "Personal Independence Payment") ||
            (req.query.expbenefits === "Carers Allowance") ||
            (req.query.expbenefits === "Incapacity Benefit") ||
            (req.query.expbenefits === "War Pension") ||
            (req.query.expbenefits === "Bereavement Support Payment") ||
            (req.query.expbenefits === "Income Support") ||
            (req.query.expbenefits === "Job Seekers Allowance") ||
            (req.query.expbenefits === "Attendance Allowance") ||
            (req.query.expbenefits === "Severe Disablement Allowance") ||
            (req.query.expbenefits === "Maternity Allowance") ||
            (req.query.expbenefits === "Pension Credit") ||
            (req.query.expbenefits === "Child Benefit")) {
    res.redirect('benefit-date');
  } else {
    res.redirect('benefit-info');
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


// S1 Cancellations - April 2020 //
router.get(/cancel-reasons/, function (req,res){
  if(req.query.cancelR === "Returned to UK"){
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Dependant entitled to S1 in own right") {
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Moved to another EU/EEA country") {
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Moved to different country") {
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Died") {
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Old forms cancelled to issue new S1") {
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Created in error") {
    res.redirect('cancel-date2');
  } else if(req.query.cancelR === "Different S1 start date required") {
    res.redirect('start-date-ms');
  } else if(req.query.cancelR === "Other") {
    res.redirect('cancel-date2');
  } else {
    res.redirect('cancel-reason-new2');
  }
});

// Reason for reissuing s1 - reissue-reason.html //
router.get(/cheetah/, function (req,res){
  if(req.query.reissueReason === "Yes"){
    res.redirect('ent-date-s1');
  } else if(req.query.reissueReason === "No") {
    res.redirect('case-record-32');
  } else {
    res.redirect('reissue-reason');
  }
});

// Dependant entitlemed in own right ISSUED- April 2020 //
router.get(/own-right/, function (req,res){
  if(req.query.ownRight === "UK State Pension"){
    res.redirect('sp-conf');
  } else if(req.query.ownRight === "UK State Benefit") {
    res.redirect('ben-conf');
  } else {
    res.redirect('pension-or-ben');
  }
});
// Dependant entitlemed in own right REGISTERED- April 2020 //
router.get(/reg-right-own/, function (req,res){
  if(req.query.regOwnRight === "UK State Pension"){
    res.redirect('sp-conf-2');
  } else if(req.query.regOwnRight === "UK State Benefit") {
    res.redirect('ben-conf-2');
  } else {
    res.redirect('pension-or-ben-2');
  }
});

// Issue new forms currently hold old forms (issued) - April 2020 //
router.get(/cancel-confirm/, function (req,res){
  if(req.query.newForms === "Created in error"){
    res.redirect('cancel-conf');
  } else if(req.query.newForms === "Old forms cancelled to issue new S1") {
    res.redirect('oldforms-conf');
  } else {
    res.redirect('cancel-reason');
  }
});

// Issue new forms currently hold old forms (registered) - cancel-reason-reg //
router.get(/oldforms-cancel/, function (req,res){
  if(req.query.newForms === "Yes"){
    res.redirect('oldforms-conf');
  } else if(req.query.newForms === "No") {
    res.redirect('case-record-16');
  } else {
    res.redirect('cancel-reason-reg');
  }
});

// Create a new S1 if moving to aother EU member state - new-s1-eu.html //
router.get(/rhino/, function (req,res){
  if(req.query.s1Required === "Yes"){
    res.redirect('contact-address-eu');
  } else if(req.query.s1Required === "No") {
    res.redirect('cya-address-eu-no-new-s1');
  } else {
    res.redirect('new-s1-eu');
  }
});

// Create a new S1 if moving to aother EU member state - new-s1-eu-2.html //
router.get(/snake/, function (req,res){
  if(req.query.s1Required === "Yes"){
    res.redirect('contact-address-eu-2');
  } else if(req.query.s1Required === "No") {
    res.redirect('cya-address-eu-no-new-s1-2');
  } else {
    res.redirect('new-s1-eu-2');
  }
});

// Create a new S1 if moving to aother EU member state - new-s1-eu-3.html //
router.get(/frog/, function (req,res){
  if(req.query.s1Required === "Yes"){
    res.redirect('contact-address-eu-3');
  } else if(req.query.s1Required === "No") {
    res.redirect('cya-address-eu-no-new-s1-3');
  } else {
    res.redirect('new-s1-eu-3');
  }
});

// Create a new S1 if moving to aother EU member state - new-s1-eu-4.html //
router.get(/wolf/, function (req,res){
  if(req.query.s1Required === "Yes"){
    res.redirect('contact-address-eu-4');
  } else if(req.query.s1Required === "No") {
    res.redirect('cya-address-eu-no-new-s1-4');
  } else {
    res.redirect('new-s1-eu-4');
  }
});


// Require a new S1 if moving within same country - Pensioner registered //
router.get(/s1Required/, function (req,res){
  if(req.query.s1Required === "Yes"){
    res.redirect('new-address-date-same-country-new-s1');
  } else if(req.query.s1Required === "No") {
    res.redirect('new-address-date-same-country-no-new-s1');
  } else {
    res.redirect('new-s1-req');
  }
});

// Require a new S1 if moving within same country - Exportable Benefits registered//
router.get(/test/, function (req,res){
  if(req.query.s1Required === "Yes"){
    res.redirect('new-address-date-same-country-new-s1-2');
  } else if(req.query.s1Required === "No") {
    res.redirect('new-s1-req-2');
  } else {
    res.redirect('new-s1-req-2');
  }
});

// Use residential address in the reprint journey, reprint-res-address.html
router.get(/dog/, function (req,res) {
  if(req.query.radiosRA === "Use residential address") {
    res.redirect('reprint-res-for-corr-address');
  } else if(req.query.radiosRA === "Enter correspondence address") {
    res.redirect('cya-reprint-4');
  } else {
    res.redirect('reprint-res-address');
  }
});

// Aware when they will get paid their state pension, same-pension-info.html
router.get(/deer/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-country-pension-date');
  } else if(req.query.samePension === "No") {
    res.redirect('check-your-answers-11');
  } else {
    res.redirect('same-pension-info');
  }
});

// Aware when they will get paid their state pension, same-pension-info-2.html
router.get(/owl/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-country-pension-date-2');
  } else if(req.query.samePension === "No") {
    res.redirect('check-your-answers-11');
  } else {
    res.redirect('same-pension-info-2');
  }
});

// Aware when they will get paid their state pension, same-pension-info-3.html
router.get(/horse/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-country-pension-date-3');
  } else if(req.query.samePension === "No") {
    res.redirect('check-your-answers-27');
  } else {
    res.redirect('same-pension-info-3');
  }
});

// Aware when they will get paid their state pension, same-pension-info-4.html
router.get(/peacock/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-country-pension-date-6');
  } else if(req.query.samePension === "No") {
    res.redirect('check-your-answers-18');
  } else {
    res.redirect('same-pension-info-4');
  }
});

// State pension from France, same-pension-3.html
router.get(/rabbit/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-pension-info');
  } else if(req.query.samePension === "No") {
    res.redirect('another-pension-3');
  } else {
    res.redirect('same-pension-3');
  }
});


// State pension from France, same-pension-4.html
router.get(/eagle/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-pension-info-2');
  } else if(req.query.samePension === "No") {
    res.redirect('another-pension-3');
  } else {
    res.redirect('same-pension-4');
  }
});

// State pension from France, same-pension-5.html
router.get(/lion/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-pension-info-3');
  } else if(req.query.samePension === "No") {
    res.redirect('another-pension-9');
  } else {
    res.redirect('same-pension-5');
  }
});

// State pension from France, same-pension-6.html
router.get(/pigeon/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-pension-info-4');
  } else if(req.query.samePension === "No") {
    res.redirect('another-pension-6');
  } else {
    res.redirect('same-pension-6');
  }
});

// Third country pension, another-pension-3.html
router.get(/sky/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-4');
  } else {
    res.redirect('another-pension-3');
  }
});

// Third country pension, another-pension-4.html
router.get(/galaxy/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-2');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-3');
  } else {
    res.redirect('another-pension-4');
  }
});

// Third country pension, another-pension-5.html
router.get(/rocket/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-3');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-7');
  } else {
    res.redirect('another-pension-5');
  }
});

// Third country pension, another-pension-6.html
router.get(/clouds/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-5');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-12');
  } else {
    res.redirect('another-pension-6');
  }
});

// Third country pension, another-pension-7.html
router.get(/uranus/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-4');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-14');
  } else {
    res.redirect('another-pension-7');
  }
});

// Third country pension, another-pension-8.html
router.get(/meteroid/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-6');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-2');
  } else {
    res.redirect('another-pension-8');
  }
});

// Third country pension, another-pension-9.html
router.get(/hydrogen/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-7');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('add-dep-to-app-19');
  } else {
    res.redirect('another-pension-9');
  }
});

// Third country pension, add-another-pension-3.html
router.get(/moon/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('check-your-answers-5');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('check-your-answers-4');
  } else {
    res.redirect('add-another-pension-3');
  }
});

//Information to be sent by an email for tcp evidence, tcp-info-email.html
router.get(/jupiter/, function (req,res) {
  if(req.query.nameEmail === "Yes") {
    res.redirect('tcp-enter-email');
  } else if(req.query.nameEmail === "No") {
    res.redirect('add-dep-to-app-8');
  } else {
    res.redirect('tcp-info-email');
  }
});  

  //Information to be sent by an email for tcp evidence, tcp-info-email-2.html
router.get(/venus/, function (req,res) {
  if(req.query.nameEmail === "Yes") {
    res.redirect('tcp-enter-email-2');
  } else if(req.query.nameEmail === "No") {
    res.redirect('add-dep-to-app-9');
  } else {
    res.redirect('tcp-info-email-2');
  }
});

  //Information to be sent by an email for tcp evidence, tcp-info-email-3.html
router.get(/mars/, function (req,res) {
  if(req.query.nameEmail === "Yes") {
    res.redirect('tcp-enter-email-3');
  } else if(req.query.nameEmail === "No") {
    res.redirect('add-dep-to-app-10');
  } else {
    res.redirect('tcp-info-email-3');
  }
});

  //Information to be sent by an email for tcp evidence, tcp-info-email-4.html
  router.get(/pluto/, function (req,res) {
    if(req.query.nameEmail === "Yes") {
      res.redirect('tcp-enter-email-4');
    } else if(req.query.nameEmail === "No") {
      res.redirect('add-dep-to-app-15');
    } else {
      res.redirect('tcp-info-email-4');
    }
  });

   //Information to be sent by an email for tcp evidence, tcp-info-email-5.html
   router.get(/saturn/, function (req,res) {
    if(req.query.nameEmail === "Yes") {
      res.redirect('tcp-enter-email-5');
    } else if(req.query.nameEmail === "No") {
      res.redirect('add-dep-to-app-13');
    } else {
      res.redirect('tcp-info-email-5');
    }
  });

  //Information to be sent by an email for tcp evidence, tcp-info-email-6.html
  router.get(/atom/, function (req,res) {
    if(req.query.nameEmail === "Yes") {
      res.redirect('tcp-enter-email-6');
    } else if(req.query.nameEmail === "No") {
      res.redirect('add-dep-to-app-18');
    } else {
      res.redirect('tcp-info-email-6');
    }
  });

   //Information to be sent by an email for tcp evidence, tcp-info-email-7.html
  router.get(/helium/, function (req,res) {
    if(req.query.nameEmail === "Yes") {
      res.redirect('tcp-enter-email-7');
    } else if(req.query.nameEmail === "No") {
      res.redirect('add-dep-to-app-20');
    } else {
      res.redirect('tcp-info-email-7');
    }
  });

router.get(/reprint-reasons/, function (req,res){
  if(req.query.reprint === "Member state"){
    res.redirect('reprint-ms-reason');
  } else {
    res.redirect('reprint-reason');
  }
});

//Information to be sent by an email for nino change evidence, nino-change-info-email.html
router.get(/nino-email/, function (req,res) {
  if(req.query.ninoEmail === "Yes") {
    res.redirect('nino-change-enter-email');
  } else if(req.query.ninoEmail === "No") {
    res.redirect('cya-nino-change-2');
  } else {
    res.redirect('nino-change-info-email');
  }
});

//Name change reason, name-change-reason.html
router.get(/asteroid/, function (req,res) {
  if(req.query.nameChange === "Incorrect name printed on S1") {
    res.redirect('new-name-1');
  } else if(req.query.nameChange === "Married/Divorced") {
    res.redirect('new-name-2');
  } else if(req.query.nameChange === "Change of name(legally)") {
      res.redirect('new-name-2');
  } else {
    res.redirect('name-change-reason');
  }
});

//Information to be sent by an email for nino change evidence, name-change-info-email.html
router.get(/name-email/, function (req,res) {
  if(req.query.nameEmail === "Yes") {
    res.redirect('name-change-enter-email');
  } else if(req.query.nameEmail === "No") {
    res.redirect('cya-name-change-3');
  } else {
    res.redirect('name-change-info-email');
  }
});

//Type of informant in the death journey - informant.html //
router.get(/informantType/, function (req,res){
  if(req.query.radiosET === "Dependant"){
    res.redirect('informant-details');
  } else if(req.query.radiosET === "Third party") {
    res.redirect('informant-details-2');
  } else {
    res.redirect('informant');
  }
});

//Type of informant in the death journey - informant-2.html //
router.get(/mangoose/, function (req,res){
  if(req.query.radiosET === "Dependant"){
    res.redirect('informant-details-3');
  } else if(req.query.radiosET === "Third party") {
    res.redirect('informant-details-4');
  } else {
    res.redirect('informant');
  }
});

//Information to be sent by an email for death evidence, death-info-email.html
router.get(/deathEmail/, function (req,res) {
  if(req.query.deathEmail === "Yes") {
    res.redirect('cya-death-3');  
  } else if(req.query.deathEmail === "No") {
    res.redirect('cya-death-4');
  } else {
    res.redirect('death-info-email');
  }
});

//Information to be sent by an email for death evidence, death-info-email-2.html
router.get(/thirdpartyEmail/, function (req,res) {
  if(req.query.deathEmail === "Yes") {
    res.redirect('cya-death-5');
  } else if(req.query.deathEmail === "No") {
    res.redirect('cya-death-6');
  } else {
    res.redirect('death-info-email');
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



router.get(/state/, function (req,res){
  if(req.query.state === "yes") {
    res.redirect('residency');
  }
  else {
    res.redirect('kickout');
  }
});

router.get(/exportableben/, function (req,res){
  if(req.query.exportableben === "yes") {
    res.redirect('benefitcapture');
  }
  else {
    res.redirect('kickout');
  }
});

router.get(/taxcon/, function (req,res){
  if(req.query.taxcon === "yes") {
    res.redirect('taxcapture');
  }
  else {
    res.redirect('kickout');
  }
});

router.get(/medically/, function (req,res){
  if(req.query.medically === "yes") {
    res.redirect('state-funded');
  }
  if(req.query.medically === "no") {
    res.redirect('kickout');
  }
});

router.get(/selforsomeone/, function (req,res){
  if(req.query.selforsomeone === "yes") {
    res.redirect('customer');
  }
  else {
    res.redirect('customer');
  }
});

router.get(/bentype/, function (req,res){
  if(req.query.bentype === "pension"){
    res.redirect('startend');
  } else if(req.query.bentype === "two") {
    res.redirect('startend');
  } else if(req.query.bentype === "three") {
    res.redirect('startend');
  } else {
    res.redirect('kickout');
  }
});

router.get(/customers/, function (req,res){
  if(req.query.customers === "travel"){
    res.redirect('ehic-eligbility');
  } else if(req.query.customers === "moving") {
    res.redirect('exportable');
  } else if(req.query.customers === "working") {
    res.redirect('tax-contributions');
  } else if(req.query.customers === "planned") {
    res.redirect('medical');
  } else if(req.query.customers === "accident") {
    res.redirect('ehic-eligbility');
  } else {
    res.redirect('customers');
  }
});

router.get(/issued-date/, function (req,res){
  if(req.query.postedworker === "Yes"){
    res.redirect('pw-issuedate');
  } else if(req.query.postedworker === "No") {
    res.redirect('moving-country'); // S1 //
  } else {
    res.redirect('posted-worker');
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

// end EHIC //


// Posted Worker / Exp Ben and SP S1 / e109 / DA1 / PRC //
router.get(/postedWorker/, function (req,res) {
  if(req.query.radiosPW === "Posted worker") {
    res.redirect('working-country');
  } else if (req.query.radiosPW === "Exportable benefit including State Pension") {
    res.redirect('entitlement-type');
  } else if (req.query.radiosPW === "Dependant of UK worker") {
    res.redirect('contact-address-e109');
  } else if (req.query.radiosPW === "Occupational disease or injury") {
    res.redirect('da1-country-res');
  } else if (req.query.radiosPW === "Provisional Replacement Certificate (PRC)") {
    res.redirect('prc-type');
  } else {
    res.redirect('create-entitlement');
  }
});

// PRC treatment type, treatment-type.html
router.get(/treatmentType/, function (req,res) {
  if(req.query.radiosET === "Yes") {
    res.redirect('ehic-details');
  } else if (req.query.radiosET === "No") {
    res.redirect('exit-prc-rejected-1');
  } else if (req.query.radiosET === "Don't know") {
    res.redirect('ehic-details');
  } else {
    res.redirect('treatment-type');
  }
});

// PRC treatment type for dependant, treatment-type-dep.html
router.get(/treatmenttypeDep/, function (req,res) {
  if(req.query.radiosET === "Yes") {
    res.redirect('ehic-details-dep');
  } else if (req.query.radiosET === "No") {
    res.redirect('exit-prc-rejected-dep');
  } else if (req.query.radiosET === "Don't know") {
    res.redirect('ehic-details-dep');
  } else {
    res.redirect('treatment-type-dep');
  }
});

// PRC type, prc-type.html
router.get(/prcType/, function (req,res) {
  if(req.query.radiosET === "For me") {
    res.redirect('treatment-type');
  } else if (req.query.radiosET === "For a dependant") {
    res.redirect('check-your-answers-prc2');
  } else {
    res.redirect('prc-type');
  }
});

// PRC review result, review-result-prc.html
router.get(/reviewResult/, function (req,res) {
  if(req.query.radiosResult === "Approved with evidence") {
    res.redirect('done-prc-approved');
  } else if (req.query.radiosResult === "Approved but no evidence provided") {
    res.redirect('done-prc-approved');
  } else if (req.query.radiosResult === "Evidence requested") {
    res.redirect('done-prc-review');
  } else if (req.query.radiosResult === "Not approved") {
    res.redirect('exit-prc-rejected-2');
  } else {
    res.redirect('review-result-prc');
  }
});

router.get(/newPerson/, function (req,res) {
  if(req.query.radiosPW === "hardcoded") {
    res.redirect('');
  } else if (req.query.radiosPW === "Use a different residential address") {
    res.redirect('');
  } else if (req.query.radiosPW === "Address not provided") {
    res.redirect('');
  } else if (req.query.radiosPW === "Use a different address for correspondence") {
    res.redirect('corr-address');
  } else {
    res.redirect('res-address');
  }
});


// DA1 employment status//
router.get(/empStatus/, function (req,res) {
  if(req.query.radioES === "Employed") {
    res.redirect('da1-date');
  } else if (req.query.radioES === "Self-employed") {
    res.redirect('da1-date');
  } else if (req.query.radioES === "Unemployed") {
    res.redirect('da1-date');
  } else if (req.query.radioES === "Not specified") {
    res.redirect('da1-date');
  } 
  else {
    res.redirect('employment-status');
  }
});


// DA1 reason for entitlement //
router.get(/entReason/, function (req,res) {
  if(req.query.radiosR === "Occupational disease") {
    res.redirect('consequence-od');
  } else if (req.query.radiosR === "Accident at work") {
    res.redirect('consequence-acc');
  } else {
    res.redirect('ent-reason');
  }
});

// DA1 reason to visit country - Disease //
router.get(/diseaseCountry/, function (req,res) {
  if(req.query.diseaseCountry === "Take up residence") {
    res.redirect('check-your-answers-13');
  } else if (req.query.diseaseCountry === "Receive medical treatment") {
    res.redirect('check-your-answers-13');
  } else if (req.query.diseaseCountry === "None of the above") {
    res.redirect('check-your-answers-13');
  } else {
    res.redirect('da1-country-reason-2');
  }
});

// DA1 reason to visit country - Injury //
router.get(/injuryCountry/, function (req,res) {
  if(req.query.injuryCountry === "Take up residence") {
    res.redirect('check-your-answers-12');
  } else if (req.query.injuryCountry === "Receive medical treatment") {
    res.redirect('check-your-answers-12');
  } else {
    res.redirect('da1-country-reason');
  }
});



// EU exception //
router.get(/euException/, function (req,res) {
  if(req.query.radiosPW === "Posted worker") {
    res.redirect('working-country');
  } else if (req.query.radiosPW === "Exportable benefit including State Pension") {
    res.redirect('entitlement-type');
  } else if (req.query.radiosPW === "Dependant of UK worker") {
    res.redirect('contact-address-e109');
  } else if (req.query.radiosPW === "EU exception") {
    res.redirect('eu-exception');
  } else {
    res.redirect('create-entitlement');
  }
});

router.get(/depEuException/, function (req,res) {
  if(req.query.radiosEU === "Posted worker") {
    res.redirect('working-country');
  } else if (req.query.radiosEU === "Exportable benefit including State Pension") {
    res.redirect('entitlement-type');
  } else if (req.query.radiosEU === "Dependant of UK worker") {
    res.redirect('contact-address-e109');
  } else if (req.query.radiosEU === "EU exception") {
    res.redirect('eu-exception-dep');
  } else {
    res.redirect('create-entitlement-dep');
  }
});

// EU Version 2 - Bilateral Agreement
router.get(/v2EuException/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('uk'); 
  } else if (req.query.radiosPW === "No") {
    res.redirect('create-entitlement');
  } else {
    res.redirect('eu');
  }
});


// EU Version 2 - Bilateral Agreement - Main or Dependant?
router.get(/mainOrDependant/, function (req,res) {
  if(req.query.radiosPW === "Main") {
    res.redirect('eu-exception');
  } else if (req.query.radiosPW === "Dependant") {
    res.redirect('dependant-eu/search');
  } else {
    res.redirect('main-dep');
  }
});

// EU Version 2 - Bilateral Agreement - Email options
router.get(/emailOptions/, function (req,res) {
  if(req.query.radiosPW === "Institution") {
    res.redirect('case-record-eu-issued');
  } else if (req.query.radiosPW === "Individual") {
    res.redirect('case-record-eu-issued');
  } else {
    res.redirect('email-options');
  }
});

// end EU exception 


// dependant journey - register an entitlement
router.get(/entitlementTypeDep/, function (req,res) {
  if(req.query.radiosDEP === "Customer") {
    res.redirect('moving-country-ig-dep2');
  } else if (req.query.radiosDEP === "International Group") {
    res.redirect('moving-country-ig-dep');
  } else {
    res.redirect('entitlement-type-dep');
  }
});


// main journey - register an entitlement
router.get(/entitlementType/, function (req,res) {
  if(req.query.radiosET === "Customer") {
    res.redirect('moving-country');
  } else if (req.query.radiosET === "International Group") {
    res.redirect('moving-country-ig');
  } else {
    res.redirect('entitlement-type');
  }
});


router.get(/depPostedWorker/, function (req,res) {
  if(req.query.radiosPW === "S1 Posted Worker") {
    res.redirect('dep-working-country');
  } else if (req.query.radiosPW === "S1") {
    res.redirect('dep-moving-country');
  } else {
    res.redirect('create-dep-entitlement');
  }
});


router.get(/same-pension-date-ig/, function (req,res) {
  if(req.query.samePensionIg === "Yes") {
    res.redirect('not-entitled');
  } else if(req.query.samePensionIg === "No") {
    res.redirect('contact-address-ig');
  } else {
    res.redirect('same-pension');
  }
});
router.get(/same-pension-date/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('not-entitled');
  } else if(req.query.samePension === "No") {
    res.redirect('another-pension');
  } else {
    res.redirect('same-pension');
  }
});

router.get(/uk-benefit-info/, function (req,res) {
  if(req.query.statePension === "Yes") {
    res.redirect('pension-date');
  } else if(req.query.statePension === "No") {
    res.redirect('not-entitled-2');
  } else {
    res.redirect('pension-info');
  }
});

// Standard pensioner s1
// State pension from France, same-pension.html
router.get(/panda/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-pension-info');
  } else if(req.query.samePension === "No") {
    res.redirect('another-pension');
  } else {
    res.redirect('same-pension');
  }
});

// Aware when they will get paid their state pension, same-pension-info.html
router.get(/camel/, function (req,res) {
  if(req.query.samePension === "Yes") {
    res.redirect('same-country-pension-date');
  } else if(req.query.samePension === "No") {
    res.redirect('check-your-answers-4');
  } else {
    res.redirect('same-pension-info');
  }
});

// Third country pension, another-pension.html
router.get(/ox/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('check-your-answers-3');
  } else {
    res.redirect('another-pension');
  }
});

// Third country pension, another-pension.html
router.get(/crow/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('tcp-info-email-2');
  } else if(req.query.thirdcountrypension === "No") {
    res.redirect('check-your-answers-6');
  } else {
    res.redirect('another-pension');
  }
});

//Information to be sent by an email for tcp evidence, tcp-info-email.html
router.get(/tcp-email/, function (req,res) {
  if(req.query.nameEmail === "Yes") {
    res.redirect('tcp-enter-email');
  } else if(req.query.nameEmail === "No") {
    res.redirect('check-your-answers-7');
  } else {
    res.redirect('tcp-info-email');
  }
});

//Information to be sent by an email for tcp evidence, tcp-info-email-2.html
router.get(/mercury/, function (req,res) {
  if(req.query.nameEmail === "Yes") {
    res.redirect('tcp-enter-email-2');
  } else if(req.query.nameEmail === "No") {
    res.redirect('check-your-answers-8');
  } else {
    res.redirect('tcp-info-email-2');
  }
});


// Dependant entitled in own right - registered status
// router.get(/dep-has-pension/, function (req,res) {
//   if(req.query.depHasPension === "Yes") {
//     res.redirect('pension-date-2');
//   } else if(req.query.depHasPension === "No") {
//     res.redirect('not-entitled-2');
//   } else {
//     res.redirect('pension-info-2');
//   }
// });


// CORRESPONDENCE ADDRESS - Y / N, use-corres.html, MAIN
router.get(/corres-address/, function (req,res) {
  if(req.query.corresAddress === "Yes") {
    res.redirect('contact-details-4');
  } else if(req.query.corresAddress === "No") {
    res.redirect('corr-address-2');
  } else {
    res.redirect('use-corres');
  }
});

// USE RESIDENTIAL AS CORRESPONDENCE ADDRESS - Y / N, use-corres-2.html, DEPENDANT
router.get(/giraffe/, function (req,res) {
  if(req.query.resiAddress === "Yes") {
    res.redirect('email-address');
  } else if(req.query.resiAddress === "No") {
    res.redirect('corr-address-4');
  } else {
    res.redirect('use-corres-2');
  }
});

// WHAT IS YOUR RESIDENTIAL ADDRESS?, res-address.html
router.get(/use-resi-address/, function (req,res) {
  if(req.query.radiosRA === "hardcoded" || req.query.radiosRA === "Use a different residential address") {
    res.redirect('use-corres-2');
  } else if(req.query.radiosRA === "Address not provided") {
    res.redirect('email-address');
  } else {
    res.redirect('res-address');
  }
});

// CREATE PERSON FROM SEARCH RESULTS, create-person.html
router.get(/gorilla/, function (req,res) {
  if(req.query.createPerson === "Yes") {
    res.redirect('latency');
  } else if(req.query.createPerson === "No") {
    res.redirect('search'); 
  } else {
    res.redirect('create-person');
  }
});

router.get(/thisIsNotPostedWorker/, function (req,res) {
  if(req.query.test123 === "Posted worker") {
    res.redirect('email-address-2');
  } else if (req.query.test123 === "Exportable benefit including State Pension") {
    res.redirect('email-address-2');
  } else if (req.query.test123 === "Posted worker") {
    res.redirect('email-address-2');
  } else {
    res.redirect('contact-address-4');
  }
});

router.get(/zebra/, function (req,res) {
  if(req.query.abc123 === "hardcoded") {
    res.redirect('email-address');
  } else if (req.query.abc123 === "Use a different residential address") {
    res.redirect('email-address');
  } else if (req.query.abc123 === "Address not provided") {
    res.redirect('email-address');
  } else {
    res.redirect('contact-address-4');
  }
});

//Address finder(css)- check box for same correspondence address
router.post('/corr-address', (req, res) => {
  const checked = req.session.data['ohs']
  checked ? res.redirect('/v9_0/ccs/address-finder-2/contact-details') : res.redirect('/v9_0/ccs/address-finder-2/enter-postcode-corr')
});

//Address finder(admin)- check box for same correspondence address
router.post('/adm-corr-address', (req, res) => {
  const checked = req.session.data['ohs']
  checked ? res.redirect('/v9_0/admin/address-finder/contact-details') : res.redirect('/v9_0/admin/address-finder/enter-postcode-corr')
});

//Address finder(admin)- check box for address not provided
router.post('/res-address', (req, res) => {
  const checked = req.session.data['ohs']
  checked ? res.redirect('/v9_0/admin/address-finder/contact-details-2') : res.redirect('/v9_0/admin/address-finder/address-finder-res')
});

//DWP Address finder(css) - check box for same correspondence address
router.post('/corr-address-dwp', (req, res) => {
  const checked = req.session.data['ohs']
  checked ? res.redirect('/v9_0/ccs/dwp3/contact-details') : res.redirect('/v9_0/ccs/dwp3/enter-postcode-corr')
});

// Document upload - 2
// Select entitlement for document upload, entitlement.html,
router.get(/entitlement-doc/, function (req,res) {
  if(req.query.entitlementDoc === "yes") {
    res.redirect('category');
  } else if(req.query.entitlementDoc === "no") {
    res.redirect('case-record');
  } else {
    res.redirect('entitlement');
  }
});

// Select category for document upload, category.html,
router.get(/category-doc/, function (req,res) {
  if(req.query.categoryDoc === "uk residency") {
    res.redirect('uk-residency-evidence');
  } else if(req.query.categoryDoc === "ihs") {
    res.redirect('immigration-evidence');
  } else {
    res.redirect('category');
  }
});

// Select UK residency evidence for document upload, uk-residency-evidence.html,
router.get(/ukres-evidence/, function (req,res) {
  if(req.query.ukresEvidence === "uk residency") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "council tax") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "rent/mortgage") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "benefit") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "hmrc") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "bank") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "student loan") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "hospital/gp") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "other") {
    res.redirect('check-your-answers');
  } else {
    res.redirect('uk-residency-evidence');
  }
});

// Select UK residency evidence for document upload, ihs-evidence.html,
router.get(/ihs-evidence/, function (req,res) {
  if(req.query.ihsEvidence === "visa") {
    res.redirect('check-your-answers');
  } else if(req.query.ukresEvidence === "other") {
    res.redirect('check-your-answers');
  } else {
    res.redirect('ihs-evidence');
  }
});

// Check Evidence, check-evidence.html,
router.get(/check-file/, function (req,res) {
  if(req.query.checkFile === "yes") {
    res.redirect('conf-upload');
  } else if(req.query.checkFile === "no") {
    res.redirect('upload-evidence');
  } else {
    res.redirect('check-evidence');
  }
});

module.exports = router