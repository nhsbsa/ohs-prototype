// External dependencies
const express = require('express');
const { date } = require('gulp-util');
const router = express.Router();


// Route index page
// router.get('/', function (req, res) {
//   res.render('index');
// });

// add your routes here


// -------------------- //
// ----- S2 Test ------ //
// -------------------- //

//What is the date the request was received? //
router.post([/date-request/, /date-request-error/, /date-request-invalid/], function (req,res) {
  console.log(req.body.dateOfRequest);
  
  const dorRegEx = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/;

  if(req.body.dateOfRequest === '' || req.body.dateOfRequest === undefined) {
    res.redirect('date-request');
  } else if(req.body.dateOfRequest !== '' && !dorRegEx.test(req.body.dateOfRequest)) {
    res.redirect('date-request-invalid');
  } else if(req.body.dateOfRequest !== '' && dorRegEx.test(req.body.dateOfRequest)) {
    res.redirect('create-entitlement');
  } else {
    res.redirect('date-request');
  }
})

// What is the S2 for? //
router.post([/entitlement-type/, /entitlement-type-error/], function (req,res) {
  console.log(req.body.entitlementType);

  if(req.body.entitlementType === "Planned treatment") {
    return res.redirect('treatment-country-planned');
  } else if (req.body.entitlementType === "Maternity benefits") {
    return res.redirect('treatment-country-maternity');
  } else {
    res.redirect('what-s2-entitlement-error');
  }
})

// What country are they having treatment in (Planned treatment)?
router.post([/country-planned/, /country-planned-error/], function (req, res) {
  console.log(req.body.locationPicker);
 
  if (req.body.locationPicker === 'Austria' || req.body.locationPicker === 'Belgium' || req.body.locationPicker === 'Bulgaria' || req.body.locationPicker === 'Croatia' || req.body.locationPicker === 'Cyprus' || req.body.locationPicker === 'Czech Republic' || req.body.locationPicker === 'Denmark' || req.body.locationPicker === 'Finland' || req.body.locationPicker === 'France' || req.body.locationPicker === 'Germany') {
    return res.redirect('active-s1-planned');
  }
  else if (req.body.locationPicker === 'Greece' || req.body.locationPicker === 'Hungary' || req.body.locationPicker === 'Iceland' || req.body.locationPicker === 'Italy' || req.body.locationPicker === 'Latvia' || req.body.locationPicker === 'Liechtenstein' || req.body.locationPicker === 'Lithuania' || req.body.locationPicker === 'Luxembourg' || req.body.locationPicker === 'Malta' || req.body.locationPicker === 'Netherlands') {
    return res.redirect('active-s1-planned');
  }
  else if (req.body.locationPicker === 'Norway' || req.body.locationPicker === 'Poland' || req.body.locationPicker === 'Portugal' || req.body.locationPicker === 'Republic of Ireland' || req.body.locationPicker === 'Romania' || req.body.locationPicker === 'Slovakia' || req.body.locationPicker === 'Slovenia' || req.body.locationPicker === 'Spain' || req.body.locationPicker === 'Sweden' || req.body.locationPicker === 'Switzerland') {
    return res.redirect('active-s1-planned');
  }
  else if (req.body.locationPicker === '') {
    return res.redirect('treatment-country-planned-error');
  }
  else {
    return res.redirect('kickouts/ineligible-treatment-country');
  }
})

// What country are they having treatment in (Maternity benefits)?

router.post([/country-maternity/, /country-maternity-error/], function (req, res) {
  console.log(req.body.locationPicker);
 
  if (req.body.locationPicker === 'Austria' || req.body.locationPicker === 'Belgium' || req.body.locationPicker === 'Bulgaria' || req.body.locationPicker === 'Croatia' || req.body.locationPicker === 'Cyprus' || req.body.locationPicker === 'Czech Republic' || req.body.locationPicker === 'Denmark' || req.body.locationPicker === 'Finland' || req.body.locationPicker === 'France' || req.body.locationPicker === 'Germany') {
    return res.redirect('active-s1-maternity');
  }
  else if (req.body.locationPicker === 'Greece' || req.body.locationPicker === 'Hungary' || req.body.locationPicker === 'Iceland' || req.body.locationPicker === 'Italy' || req.body.locationPicker === 'Latvia' || req.body.locationPicker === 'Liechtenstein' || req.body.locationPicker === 'Lithuania' || req.body.locationPicker === 'Luxembourg' || req.body.locationPicker === 'Malta' || req.body.locationPicker === 'Netherlands') {
    return res.redirect('active-s1-maternity');
  }
  else if (req.body.locationPicker === 'Norway' || req.body.locationPicker === 'Poland' || req.body.locationPicker === 'Portugal' || req.body.locationPicker === 'Republic of Ireland' || req.body.locationPicker === 'Romania' || req.body.locationPicker === 'Slovakia' || req.body.locationPicker === 'Slovenia' || req.body.locationPicker === 'Spain' || req.body.locationPicker === 'Sweden' || req.body.locationPicker === 'Switzerland') {
    return res.redirect('active-s1-maternity');
  }
  else if (req.body.locationPicker === '') {
    return res.redirect('treatment-country-maternity-error');
  }
  else {
    return res.redirect('kickouts/ineligible-treatment-country');
  }
})

// Do you have an active S1 (Planned)?
router.post([/active-s1-planned/, /active-s1-planned-error/], function (req, res) {
  console.log(req.body.activeSOne);
 
  if (req.body.activeSOne === 'Yes') {
    return res.redirect('s1-country-planned');
  }
  else if (req.body.activeSOne === 'No') {
    return res.redirect('treatment-start-planned');
  }
  else if (req.body.activeSOne === '') {
    return res.redirect('active-s1-planned-error');
  }
})

// Do you have an active S1 (Maternity)?
router.post([/active-s1-maternity/, /active-s1-maternity-error/], function (req, res) {
  console.log(req.body.activeSOne);
 
  if (req.body.activeSOne === 'Yes') {
    return res.redirect('s1-country-maternity');
  }
  else if (req.body.activeSOne === 'No') {
    return res.redirect('nationality');
  }
  else {
    return res.redirect('active-s1-maternity-error');
  }
})

// What country do they have an S1 in? (Planned)

router.post([/country-s1-planned/, /country-s1-planned-error/], function (req, res) {
  var locationPicker = req.session.data['myInputsEURT'];
  console.log(locationPicker);
  console.log(req.body.countrySOne);

  if ((locationPicker === 'Cyprus' && req.body.countrySOne === 'Cyprus') || (locationPicker === 'Finland' && req.body.countrySOne === 'Finland') || (locationPicker === 'Iceland' && req.body.countrySOne === 'Iceland') || (locationPicker === 'Ireland' && req.body.countrySOne === 'Ireland') || (locationPicker === 'Malta' && req.body.countrySOne === 'Malta') || (locationPicker === 'Portugal' && req.body.countrySOne === 'Portugal') || (locationPicker === 'Spain' && req.body.countrySOne === 'Spain') || (locationPicker === 'Sweden' && req.body.countrySOne === 'Sweden') || (locationPicker === 'Netherlands' && req.body.countrySOne === 'Netherlands')) {
    return res.redirect('kickouts/ineligible-s1-country');
  }
  else if ((locationPicker !== 'Cyprus' && req.body.countrySOne === 'Cyprus') || (locationPicker !== 'Finland' && req.body.countrySOne === 'Finland') || (locationPicker !== 'Iceland' && req.body.countrySOne === 'Iceland') || (locationPicker !== 'Ireland' && req.body.countrySOne === 'Ireland') || (locationPicker !== 'Malta' && req.body.countrySOne === 'Malta') || (locationPicker !== 'Portugal' && req.body.countrySOne === 'Portugal') || (locationPicker !== 'Spain' && req.body.countrySOne === 'Spain') || (locationPicker !== 'Sweden' && req.body.countrySOne === 'Sweden') || (locationPicker !== 'Netherlands' && req.body.countrySOne === 'Netherlands')) {
    return res.redirect('treatment-start-planned');
  }
  else if ((locationPicker === 'Cyprus' && req.body.countrySOne !== 'Cyprus') || (locationPicker === 'Finland' && req.body.countrySOne !== 'Finland') || (locationPicker === 'Iceland' && req.body.countrySOne !== 'Iceland') || (locationPicker === 'Ireland' && req.body.countrySOne !== 'Ireland') || (locationPicker === 'Malta' && req.body.countrySOne !== 'Malta') || (locationPicker === 'Portugal' && req.body.countrySOne !== 'Portugal') || (locationPicker === 'Spain' && req.body.countrySOne !== 'Spain') || (locationPicker === 'Sweden' && req.body.countrySOne !== 'Sweden') || (locationPicker === 'Netherlands' && req.body.countrySOne !== 'Netherlands')) {
    return res.redirect('treatment-start-planned');
  }
  else {
    return res.redirect('s1-country-planned-error');
  }
})

// What country do they have an S1 in? (Maternity)

router.post([/country-s1-maternity/, /country-s1-maternity-error/], function (req, res) {
  var locationPicker = req.session.data['myInputsEURT'];
  console.log(locationPicker);
  console.log(req.body.countrySOne);

  if ((locationPicker === 'Cyprus' && req.body.countrySOne === 'Cyprus') || (locationPicker === 'Finland' && req.body.countrySOne === 'Finland') || (locationPicker === 'Iceland' && req.body.countrySOne === 'Iceland') || (locationPicker === 'Ireland' && req.body.countrySOne === 'Ireland') || (locationPicker === 'Malta' && req.body.countrySOne === 'Malta') || (locationPicker === 'Portugal' && req.body.countrySOne === 'Portugal') || (locationPicker === 'Spain' && req.body.countrySOne === 'Spain') || (locationPicker === 'Sweden' && req.body.countrySOne === 'Sweden') || (locationPicker === 'Netherlands' && req.body.countrySOne === 'Netherlands')) {
    return res.redirect('kickouts/ineligible-s1-country');
  }
  else if ((locationPicker !== 'Cyprus' && req.body.countrySOne === 'Cyprus') || (locationPicker !== 'Finland' && req.body.countrySOne === 'Finland') || (locationPicker !== 'Iceland' && req.body.countrySOne === 'Iceland') || (locationPicker !== 'Ireland' && req.body.countrySOne === 'Ireland') || (locationPicker !== 'Malta' && req.body.countrySOne === 'Malta') || (locationPicker !== 'Portugal' && req.body.countrySOne === 'Portugal') || (locationPicker !== 'Spain' && req.body.countrySOne === 'Spain') || (locationPicker !== 'Sweden' && req.body.countrySOne === 'Sweden') || (locationPicker !== 'Netherlands' && req.body.countrySOne === 'Netherlands')) {
    return res.redirect('treatment-start-maternity');
  }
  else if ((locationPicker === 'Cyprus' && req.body.countrySOne !== 'Cyprus') || (locationPicker === 'Finland' && req.body.countrySOne !== 'Finland') || (locationPicker === 'Iceland' && req.body.countrySOne !== 'Iceland') || (locationPicker === 'Ireland' && req.body.countrySOne !== 'Ireland') || (locationPicker === 'Malta' && req.body.countrySOne !== 'Malta') || (locationPicker === 'Portugal' && req.body.countrySOne !== 'Portugal') || (locationPicker === 'Spain' && req.body.countrySOne !== 'Spain') || (locationPicker === 'Sweden' && req.body.countrySOne !== 'Sweden') || (locationPicker === 'Netherlands' && req.body.countrySOne !== 'Netherlands')) {
    return res.redirect('treatment-start-maternity');
  }
  else {
    return res.redirect('s1-country-maternity-error');
  }
})

// What is your nationality?
function arraysContainSame(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.length === b.length && a.every(el => b.includes(el));
}

router.post([/nationality/, /nationality-error/, /nationality-eu-error/, /nationality-eu-other-error/, /nationality-other-error/], function (req, res) {
  console.log(req.body.nationality);
  console.log(req.body.myInputsEURT);
  console.log(req.body.myInputsOtherRT);

  if (arraysContainSame(req.body.nationality, ['UK','EU, EEA', 'Other']) === true && req.body.myInputsEURT === '' && req.body.myInputsOther === '') {
    return res.redirect('nationality-eu-other-error');
  }
  else if (arraysContainSame(req.body.nationality, ['UK','EU, EEA', 'Other']) === true && req.body.myInputsEURT !== '' && req.body.myInputsOther === '') {
    return res.redirect('nationality-eu-error');
  }
  else if (arraysContainSame(req.body.nationality, ['UK','EU, EEA', 'Other']) === true && req.body.myInputsEURT === '' && req.body.myInputsOther !== '') {
    return res.redirect('nationality-other-error');
  }
  else if (arraysContainSame(req.body.nationality, ['EU, EEA', 'Other']) === true && req.body.myInputsEURT === '' && req.body.myInputsOther === '') {
    return res.redirect('nationality-eu-other-error');
  }
  else if (arraysContainSame(req.body.nationality, ['EU, EEA', 'Other']) === true && req.body.myInputsEURT !== '' && req.body.myInputsOther === '') {
    return res.redirect('nationality-other-error');
  }
  else if (arraysContainSame(req.body.nationality, ['EU, EEA', 'Other']) === true && req.body.myInputsEURT === '' && req.body.myInputsOther !== '') {
    return res.redirect('nationality-eu-error');
  }
  else if (arraysContainSame(req.body.nationality, ['UK', 'EU, EEA']) === true && req.body.myInputsEURT === '') {
    return res.redirect('nationality-eu-error');
  }
  else if (req.body.nationality === 'EU, EEA' && req.body.myInputsEURT === '') {
    return res.redirect('nationality-eu-error');
  }
  else if (arraysContainSame(req.body.nationality, ['UK', 'Other']) === true && req.body.myInputsOtherRT === '') {
    return res.redirect('nationality-other-error');
  }
  else if (req.body.nationality === 'Other' && req.body.myInputsOtherRT === '') {
    return res.redirect('nationality-other-error');
  }
  else if (req.body.nationality === '') {
    return res.redirect('nationality-error');
  }
  else {
    return res.redirect('intention-to-leave');
  }
})

// Do you intend to leave the country permanently? //
router.post([/leave-country/, /leave-country-error/], function (req,res) {
  console.log(req.body.leaveIntention);

  if(req.body.leaveIntention === "Yes") {
    res.redirect('treatment-start-maternity');
  } else if (req.body.leaveIntention === "No") {
    res.redirect('treatment-start-maternity');
  } else {
    res.redirect('intention-to-leave-error');
  }
})

// When is the treatment expected to start? (Planned) //
router.post([/treatment-start-date-planned/,/treatment-start-date-error-planned/, /treatment-start-date-invalid-planned/, /treatment-start-date-future-planned/], function (req, res) {
  const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/; /// Allows a day number between 00 and 31, a month number between 00 and 12 and a year number between 2021 and 2023
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; 
  const dd = today.getDate();

  const formattedToday = dd + '/' + mm + '/' + yyyy;

  console.log(req.body.treatmentStartP);
  console.log(formattedToday);

  if (dateReg.test(req.body.treatmentStartP) && req.body.treatmentStartP <= formattedToday) {
    res.redirect('treatment-end-planned');
  }
  else if (dateReg.test(req.body.treatmentStartP) && req.body.treatmentStartP > formattedToday) {
    res.redirect('treatment-start-future-error-planned');
  }
  else if (!dateReg.test(req.body.treatmentStartP) && req.body.treatmentStartP === '') {
    res.redirect('treatment-start-error-planned');
  }
  else if (!dateReg.test(req.body.treatmentStartP)) {
    res.redirect('treatment-start-invalid-error-planned');
  }
})

// When is the treatment expected to end? (Planned) //
router.post([/treatment-end-date-planned/, /treatment-end-invalid-planned/, /treatment-end-planned-error/], function (req, res) {
  const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/; /// Allows a day number between 00 and 31, a month number between 00 and 12 and a year number between 2021 and 2023

  var startDate = req.session.data['treatmentStartP'];
  var endDate = req.session.data['treatmentEndP'];
  console.log(startDate);
  console.log(endDate);

  var lastRunDate = new Date(startDate.split('/')[2], startDate.split('/')[1] - 1, startDate.split('/')[0]);
  console.log(lastRunDate);

  var maxEndP = new Date(lastRunDate.setMonth(lastRunDate.getMonth() + 12));
  console.log(maxEndP);

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  var convertMaxEndP = convertDate(maxEndP);
  console.log(convertMaxEndP);

  if (req.body.treatmentEndP !== '' && dateReg.test(req.body.treatmentEndP) && new Date(convertMaxEndP) < new Date(req.body.treatmentEndP)) {
    res.redirect('treatment-end-error-planned');
  }
  else if (req.body.treatmentEndP !== '' && !dateReg.test(req.body.treatmentEndP)) {
    res.redirect('treatment-end-invalid-error-planned');
  }
  else if (req.body.treatmentEndP !== '' && new Date(convertMaxEndP) >= new Date(req.body.treatmentEndP)) {
    res.redirect('treatment-facility-name');
  }
  else if (req.body.treatmentEndP === '') {
    res.redirect('treatment-facility-name');
  }
})

// When is the treatment expected to start? (Maternity) //
router.post([/treatment-start-date-maternity/,/treatment-start-date-error-maternity/, /treatment-start-date-invalid-maternity/, /treatment-start-date-future-maternity/], function (req, res) {
  const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/; /// Allows a day number between 00 and 31, a month number between 00 and 12 and a year number between 2021 and 2023
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; 
  const dd = today.getDate();

  const formattedToday = dd + '/' + mm + '/' + yyyy;

  console.log(req.body.treatmentStartM);
  console.log(formattedToday);

  if (dateReg.test(req.body.treatmentStartM) && req.body.treatmentStartM <= formattedToday) {
    res.redirect('treatment-end-maternity');
  }
  else if (dateReg.test(req.body.treatmentStartM) && req.body.treatmentStartM > formattedToday) {
    res.redirect('treatment-start-future-error-maternity');
  }
  else if (!dateReg.test(req.body.treatmentStartM) && req.body.treatmentStartM === '') {
    res.redirect('treatment-start-error-maternity');
  }
  else if (!dateReg.test(req.body.treatmentStartM)) {
    res.redirect('treatment-start-invalid-error-maternity');
  }
})

// When is the treatment expected to end? (Maternity) //
router.post([/treatment-end-date-maternity/, /treatment-end-invalid-maternity/, /treatment-end-maternity-error/], function (req, res) {
  const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/; /// Allows a day number between 00 and 31, a month number between 00 and 12 and a year number between 2021 and 2023

  var startDate = req.session.data['treatmentStartM'];
  var endDate = req.session.data['treatmentEndM'];
  console.log(startDate);
  console.log(endDate);

  var lastRunDate = new Date(startDate.split('/')[2], startDate.split('/')[1] - 1, startDate.split('/')[0]);
  console.log(lastRunDate);

  var maxEndM = new Date(lastRunDate.getTime() + (105 * 86400000));
  console.log(maxEndM);

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  var convertMaxEndM = convertDate(maxEndM);
  console.log(convertMaxEndM);
  
  if (req.body.treatmentEndM !== '' && dateReg.test(req.body.treatmentEndM) && new Date(convertMaxEndM) < new Date(req.body.treatmentEndM)) {
    res.redirect('treatment-end-error-maternity');
  }
  else if (req.body.treatmentEndM !== '' && !dateReg.test(req.body.treatmentEndM)) {
    res.redirect('treatment-end-invalid-error-maternity');
  }
  else if (req.body.treatmentEndM !== '' && new Date(convertMaxEndM) >= new Date(req.body.treatmentEndM)) {
    res.redirect('nino');
  }
  else if (req.body.treatmentEndM === '') {
    res.redirect('nino');
  }
})

// What is the name of the treatment facility? //
router.post([/treatment-facility-name/, /treatment-facility-name-error/], function (req,res) {
  console.log(req.body.treatmentFacilityName);

  if(req.body.treatmentFacilityName === '') {
    res.redirect('treatment-facility-name-error');
  } else {
    res.redirect('nino');
  }
})

//What is your National Insurance Number? //
router.post([/national-insurance/, /national-insurance-error/], function (req,res) {
  console.log(req.body.nino);

  const ninoRegEx = /^\s*[a-zA-Z]{2}(?:\s*\d\s*){6}[a-zA-Z]?\s*$/;

  if(req.body.nino !== '' && !ninoRegEx.test(req.body.nino)) {
    res.redirect('nino-error');
  } else {
    res.redirect('nhs-number');
  }
})

//What is your NHS Number? //
router.post([/nhs-number/, /nhs-number-error/], function (req,res) {
  console.log(req.body.nhsNumber);

  const nhsRegEx = /^6[0-9]{10}$/;
  var nino = req.session.data['nino'];

  if(nino === '' && req.body.nhsNumber === '') {
    res.redirect('nhs-number-error');
  } else if(req.body.nhsNumber !== '' && !nhsRegEx.test(req.body.nhsNumber)) {
    res.redirect('nhs-number-invalid');
  }
   else {
    res.redirect('contact-details');
  }
})

//What are your contact details? //
router.post([/contact-details/, /contact-details-error/, /contact-details-email/, /contact-details-phone/], function (req,res) {
  console.log(req.body.phoneNumber);
  console.log(req.body.emailAddress);
  
  const phoneRegEx = /^\+[1-9]{1}[0-9]{3,14}$/;
  const emailRegEx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  if(req.body.phoneNumber === '' && req.body.emailAddress === '') {
    res.redirect('address-details');
  } else if(req.body.phoneNumber !== '' && phoneRegEx.test(req.body.phoneNumber) && req.body.emailAddress !== '' && emailRegEx.test(req.body.emailAddress)) {
    res.redirect('address-details');
  } else if(req.body.phoneNumber !== '' && !phoneRegEx.test(req.body.phoneNumber) && req.body.emailAddress !== '' && !emailRegEx.test(req.body.emailAddress)) {
    res.redirect('contact-details-error');
  } else if(req.body.phoneNumber !== '' && !phoneRegEx.test(req.body.phoneNumber) && req.body.emailAddress !== '' && emailRegEx.test(req.body.emailAddress)) {
    res.redirect('contact-details-phone-error');
  } else if(req.body.phoneNumber !== '' && phoneRegEx.test(req.body.phoneNumber) && req.body.emailAddress !== '' && !emailRegEx.test(req.body.emailAddress)) {
    res.redirect('contact-details-email-error');
  } else {
    res.redirect('address-details');
  }
})

//What are your address details? //
router.post([/address-details/, /address-details-postcode/], function (req,res) {
  console.log(req.body.addressPostcode);
  
  const postcodeRegEx = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/;
  const startsWithRegEx = /^[GX][JE][GY][IM]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/;

  if(req.body.addressPostcode === '') {
    res.redirect('full-name');
  } else if(req.body.addressPostcode !== '' && !startsWithRegEx.test(req.body.addressPostcode) && postcodeRegEx.test(req.body.addressPostcode)) {
    res.redirect('full-name');
  } else if(req.body.addressPostcode !== '' && !startsWithRegEx.test(req.body.addressPostcode) && !postcodeRegEx.test(req.body.addressPostcode)) {
    res.redirect('address-details-postcode');
  } else if(req.body.addressPostcode !== '' && startsWithRegEx.test(req.body.addressPostcode)) {
    res.redirect('kickouts/ineligible-postcode');
  } else {
    res.redirect('address-details');
  }
})

//What is your name? //
router.post([/full-name/, /full-name-error/], function (req,res) {
  console.log(req.body.fullName);

  if(req.body.fullName === '') {
    res.redirect('full-name-error');
  } else if(req.body.fullName !== '') {
    res.redirect('dob');
  } 
})

//What are your address details? //
router.post([/date-of-birth/, /date-of-birth-error/, /date-of-birth-invalid/], function (req,res) {
  console.log(req.body.dateOfBirth);
  
  const dobRegEx = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/;
 

  if(req.body.dateOfBirth === '') {
    res.redirect('dob-error');
  } else if(req.body.dateOfBirth !== '' && !dobRegEx.test(req.body.dateOfBirth)) {
    res.redirect('dob-invalid');
  } else if(req.body.dateOfBirth !== '' && dobRegEx.test(req.body.dateOfBirth)) {
    res.redirect('check-your-answers');
  } 
})

// Check your answers //
router.get(/check-your-answers/, function (req,res){
  var startDateP = req.session.data['treatmentStartP'];
  console.log(startDateP);
  if (startDateP) {
    var lastRunDateP = new Date(startDateP.split('/')[2], startDateP.split('/')[1] - 1, startDateP.split('/')[0]);
    var maxEndP = new Date(lastRunDateP.setMonth(lastRunDateP.getMonth() + 12));

    var convertMaxEndP = convertDate(maxEndP);
    console.log(convertMaxEndP);
  }

  var startDateM = req.session.data['treatmentStartM'];

  if (startDateM){
    var lastRunDateM = new Date(startDateM.split('/')[2], startDateM.split('/')[1] - 1, startDateM.split('/')[0]);
    var maxEndM = new Date(lastRunDateM.getTime() + (105 * 86400000));

    var convertMaxEndM = convertDate(maxEndM);
  }

	function convertDate(inputFormat) {
		function pad(s) { return (s < 10) ? '0' + s : s; }
		var d = new Date(inputFormat);
		return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
	}

  res.render('v17_0/admin/s2/new-record/check-your-answers', {convertMaxEndP: convertMaxEndP, convertMaxEndM: convertMaxEndM});
});

// -------------------- //
// ----- CRA EHIC ----- //
// -------------------- //

// What is the reason for re-issue?
router.get(/ehicReissueReasons/, function (req,res){
  if(req.query.reissue === "Stolen"){
    res.redirect('confirm-reissue-1');
  } else if (req.query.reissue === "Lost") {
    res.redirect('confirm-reissue-1');
  } else if (req.query.reissue === "Damaged") {
    res.redirect('confirm-reissue-1');
  } else if (req.query.reissue === "Change of name") {
    res.redirect('confirm-reissue-1');
  } else if (req.query.reissue === "Incorrect name or date of birth") {
    res.redirect('confirm-reissue-1');
  } else if (req.query.reissue === "Card not received") {
    res.redirect('confirm-reissue-1');
  } else if (req.query.reissue === "Other") {
    res.redirect('confirm-reissue-1');
  } else {
    res.redirect('reissue-reason-1');
  }
});

// What is the reason for re-issue?
router.get(/version2ReissueEhic/, function (req,res){
  if(req.query.v2reissue === "Stolen"){
    res.redirect('confirm-reissue-2');
  } else if (req.query.v2reissue === "Lost") {
    res.redirect('confirm-reissue-2');
  } else if (req.query.v2reissue === "Damaged") {
    res.redirect('confirm-reissue-2');
  } else if (req.query.v2reissue === "Change of name") {
    res.redirect('confirm-reissue-2');
  } else if (req.query.v2reissue === "Incorrect name or date of birth") {
    res.redirect('confirm-reissue-2');
  } else if (req.query.v2reissue === "Card not received") {
    res.redirect('confirm-reissue-2');
  } else if (req.query.v2reissue === "Other") {
    res.redirect('confirm-reissue-2');
  } else {
    res.redirect('reissue-reason-2');
  }
});

// Posted Worker / Exp Ben and SP S1 / e109 / DA1 / EHIC / PRC //
// If living in the UK //
router.get(/postedWorker/, function (req,res) {
  if(req.query.radiosPW === "Posted worker") {
    res.redirect('working-country');
  } else if (req.query.radiosPW === "Exportable benefit including State Pension") {
    res.redirect('entitlement-type');
  } else if (req.query.radiosPW === "Dependant of UK worker") {
    res.redirect('contact-address-e109');
  } else if (req.query.radiosPW === "Occupational disease or injury") {
    res.redirect('da1-country-res');
  } else if (req.query.radiosPW === "EHIC") {
    res.redirect('applicant-type');
    // res.redirect('res-uk');
    // res.redirect('uk-national');
  } else if (req.query.radiosPW === "GHIC") {
    res.redirect('ghic/ghic-for');
  } else if (req.query.radiosPW === "Provisional Replacement Certificate (PRC)") {
    res.redirect('prc-type');
  } else {
    res.redirect('create-entitlement');
  }
});


//  Exp Ben and SP S1 / e109 / DA1 / EHIC / PRC //
// If living in the UK //
router.get(/entType/, function (req,res) {
  if(req.query.radiosPW === "Posted worker") {
    res.redirect('working-country');
  } else if (req.query.radiosPW === "Exportable benefit including State Pension") {
    res.redirect('entitlement-type');
  // } else if (req.query.radiosPW === "Dependant of UK worker") {
  //   res.redirect('contact-address-e109');
  // } else if (req.query.radiosPW === "Occupational disease or injury") {
  //   res.redirect('da1-country-res');
  } else if (req.query.radiosPW === "EHIC") {
    res.redirect('res-uk');
    // res.redirect('res-uk');
    // res.redirect('uk-national');
  } else if (req.query.radiosPW === "Provisional Replacement Certificate (PRC)") {
    res.redirect('prc-type');
  } else {
    res.redirect('create-entitlement');
  }
});


// What is your relationship to the dependant? - add dep to EHIC
router.get(/cya-dep-of-eun-under18/, function (req,res) {
  if(req.query.depRelationship === "Spouse") {
    res.redirect('spouse-nationality');
  } else if (req.query.depRelationship === "Durable") {
    res.redirect('durable-nationality');
  } else if (req.query.depRelationship === "Child") {
    res.redirect('child-nationality');
  } else if (req.query.depRelationship === "Parent") {
    res.redirect('cya-dep-override');
  } else if (req.query.depRelationship === "Grandparent") {
    res.redirect('cya-dep-override');
  } else if (req.query.depRelationship === "Grandchild") {
    res.redirect('cya-dep-override');
  } else if (req.query.depRelationship === "Carer") {
    res.redirect('cya-dep-override');
  } else {
    res.redirect('dep-relationship');
  }
});

// What is your relationship to the dependant? - add dep to EHIC
router.get(/cya-dep-of-eun/, function (req,res) {
  if(req.query.depRelationship === "Spouse") {
    res.redirect('spouse-nationality');
  } else if (req.query.depRelationship === "Durable") {
    res.redirect('durable-nationality');
  } else if (req.query.depRelationship === "Child") {
    res.redirect('child-dependancy');
  } else if (req.query.depRelationship === "Parent") {
    res.redirect('cya-dep-override');
  } else if (req.query.depRelationship === "Grandparent") {
    res.redirect('cya-dep-override');
  } else if (req.query.depRelationship === "Grandchild") {
    res.redirect('cya-dep-override');
  } else if (req.query.depRelationship === "Carer") {
    res.redirect('cya-dep-override');
  } else {
    res.redirect('dep-relationship');
  }
});

// Does your durable have EU settled or pre-settled status? - add dep to EHIC
router.get(/eussDep/, function (req,res) {
  if(req.query.eussDep === "Yes") {
    res.redirect('cya-dep-durable-tc');
  } else if (req.query.eussDep === "No") {
    res.redirect('relationship-date-durable');
  } else {
    res.redirect('dep-euss');
  }
});

// What is your durable partner's nationality? - add dep to EHIC
router.get(/durableNat/, function (req,res) {
  if(req.query.radiosPW === "British") {
    // res.redirect('not-entitled-durable-1');
    res.redirect('rejected-durable-1');
  } else if (req.query.radiosPW === "Dual") {
    res.redirect('');
  } else if (req.query.radiosPW === "EU") {
    res.redirect('res-uk-durable');
  } else if (req.query.radiosPW === "Other") {
    res.redirect('dep-euss');
  } else {
    res.redirect('durable-nationality');
  }
});

// What is your durable partner's nationality? - add dep to EHIC
router.get(/childNat/, function (req,res) {
  if(req.query.radiosPW === "British") {
    res.redirect('not-entitled-child-over21');
  } else if (req.query.radiosPW === "Dual") {
    res.redirect('');
  } else if (req.query.radiosPW === "EU") {
    res.redirect('res-uk-child');
  } else if (req.query.radiosPW === "Other") {
    res.redirect('not-entitled-child-over21-tc');
  } else {
    res.redirect('child-nationality');
  }
});

// Was your durable partner resident in the UK on or before 31 December 2020?
router.get(/durableResUK/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    res.redirect('own-app-durable');
  } else if (req.query.UKresidency === "No") {
    res.redirect('relationship-date-durable');
  } else {
    res.redirect('res-uk-durable');
  }
});

// Was yourchild resident in the UK on or before 31 December 2020?
router.get(/childResUK/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    res.redirect('own-app-child');
  } else if (req.query.UKresidency === "No") {
    res.redirect('not-entitled-child-over21-eu');
  } else {
    res.redirect('res-uk-durable');
  }
});

// Did your (durable partner) relationship commence on or before 31 December 2020??
router.get(/durableRelDate/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    // res.redirect('cya-dep-durable-rel-date');
    res.redirect('relationship-2years');
  } else if (req.query.UKresidency === "No") {
    // res.redirect('relationship-2years');
    res.redirect('not-entitled-durable-2');
  } else {
    res.redirect('relationship-date-durable');
  }
});

// Has your durable partner lived with you for more than 2 years?
router.get(/durable2years/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    res.redirect('cya-dep-durable-2years');
  } else if (req.query.UKresidency === "No") {
    res.redirect('relationship-child');
  } else {
    res.redirect('relationship-2years');
  }
});

// Do you have a child with your durable partner?
router.get(/durableChild/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    res.redirect('cya-dep-durable-child');
  } else if (req.query.UKresidency === "No") {
    res.redirect('not-entitled-durable-2');
  } else {
    res.redirect('relationship-child');
  }
});




// Are you the main applicant or a relative of an EU national? - EHIC
// router.get(/appType/, function (req,res) {
//   if(req.query.radiosPW === "Main") {
//     res.redirect('res-uk');
//   } else if (req.query.radiosPW === "Dependant") {
//     res.redirect('app-type-dependant-nationality');
//   } else {
//     res.redirect('applicant-type');
//   } 
// });

// Who is the GHIC for?
router.get(/ghicFor/, function (req,res) {
  if (req.query.radiosPW === "UK-Non-EEA national student") {
    res.redirect('uk-non-eea/nationality');
  } else if (req.query.radiosPW === "other") {
    res.redirect('nationality');
  } else {
    res.redirect('ghic-for');
  } 
});

// Nationality - GHIC, UK/Non-EEA student
router.get(/nonUKNationality/, function (req,res) {
  if (req.query.radiosPW === "British") {
    res.redirect('are-you-studying');
  } else if (req.query.radiosPW === "EU") {
    res.redirect('');
  } else if (req.query.radiosPW === "Other") {
    res.redirect('are-you-studying');
  } else {
    res.redirect('nationality');
  } 
});

// Are you studying? - GHIC, UK/Non-EEA student
router.get(/nonUkEeaAreYouStudying/, function (req,res) {
  if (req.query.radiosPW === "Yes") {
    res.redirect('course-country-eu');
  } else if (req.query.radiosPW === "No") {
    res.redirect('');
  } else {
    res.redirect('are-you-studying');
  } 
});

// Select one of the following
router.get(/selectType/, function (req,res) {
  if (req.query.radiosPW === "A1") {
    res.redirect('working-country');
  } else if (req.query.radiosPW === "eu-student") {
    res.redirect('course-country-eu');
  } else if (req.query.radiosPW === "main") {
    // If northern ireland
    // res.redirect('choose-design');
    // res.redirect('cya-main');
    res.redirect('emigrate');
  } else if (req.query.radiosPW === "aupair") {
    res.redirect('aupair-leave-date');
  } else {
    res.redirect('select-type');
  } 
});

// Do you plan to emigrate in the next 5 years?
router.get(/planEmigrate/, function (req,res) {
  if (req.query.radiosPW === "Yes") {
    res.redirect('emigrate-date');
  } else if (req.query.radiosPW === "No") {
    // res.redirect('cya-main');
    res.redirect('card-choice-main');
  } else {
    res.redirect('emigrate');
  } 
});

// Do you have derived rights from a family member or 
// another person living in the UK? - EHIC
router.get(/appType/, function (req,res) {
  if (req.query.radiosPW === "Yes") {
    res.redirect('app-type-dependant-nationality');
  } else if (req.query.radiosPW === "No") {
    // res.redirect('res-uk');
    res.redirect('posted-worker-a1');
  } else {
    res.redirect('applicant-type');
  } 
});

// Are you a PW with A1 form?
router.get(/a1Posted/, function (req,res) {
  if (req.query.radiosPW === "Yes") {
    res.redirect('working-country-a1');
  } else if (req.query.radiosPW === "No") {
    res.redirect('res-uk');
    // res.redirect('posted-worker-a1');
  } else {
    res.redirect('posted-worker-a1');
  } 
});

// Posted Worker / Exp Ben and SP S1 / e109 / DA1 / EHIC / PRC //
// If living in the EU (Retired S1) //
router.get(/livingInEu/, function (req,res) {
  if(req.query.radiosPW === "Posted worker") {
    res.redirect('working-country');
  } else if (req.query.radiosPW === "Exportable benefit including State Pension") {
    res.redirect('entitlement-type');
  } else if (req.query.radiosPW === "Dependant of UK worker") {
    res.redirect('contact-address-e109');
  } else if (req.query.radiosPW === "Occupational disease or injury") {
    res.redirect('da1-country-res');
  } else if (req.query.radiosPW === "EHIC") {
    res.redirect('cya-s1-uk');
  } else if (req.query.radiosPW === "Provisional Replacement Certificate (PRC)") {
    res.redirect('prc-type');
  } else {
    res.redirect('create-entitlement');
  }
});

// Where do you live? //
// router.get(/whereDoYouLive/, function (req,res) {
//   if(req.query.radiosPW === "UK") {
//     res.redirect('working-country');
//   } else if (req.query.radiosPW === "EU, EEA or Switzerland") {
//     res.redirect('entitlement-type');
//   } else if (req.query.radiosPW === "Other") {
//     res.redirect('case-record');
//   } else {
//     res.redirect('where-do-you-live');
//   }
// });


// Were you ordinarily resident in the UK on or before 31 December 2020? - EUSS //
router.get(/resUK/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    res.redirect('uk-national');
  } else if (req.query.UKresidency === "No") {
    // res.redirect('settled-status');
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('res-uk');
  }
});


// Are you a UK national? //
router.get(/ukNational/, function (req,res) {
  if(req.query.radiosPW === "British") {
    res.redirect('uk-student');
  } else if (req.query.radiosPW === "dual") {
    res.redirect('where-were-you-born');
  } else if (req.query.radiosPW === "EU") {
    // res.redirect('are-you-studying');
    res.redirect('ever-held-uk-citizenship');
  } else if (req.query.radiosPW === "Other") {
    res.redirect('ever-held-uk-citizenship');
  } else {
    res.redirect('uk-national');
  }
});

// Where were you born? - EUSS //
router.get(/birthCountry/, function (req,res) {
  if(req.query.birthCountry === "EWS") {
    res.redirect('not-entitled-ehic');
  } else if (req.query.birthCountry === "NI") {
    res.redirect('renounced');
  } else if (req.query.birthCountry === "Other") {
    res.redirect('are-you-studying');
  } else {
    res.redirect('where-were-you-born');
  }
});

// Are you studying...? - EUSS //
router.get(/areYouStudying/, function (req,res) {
  if(req.query.areYouStudying === "Yes") {
    res.redirect('course-country-eu');
  } else if (req.query.areYouStudying === "No") {
    res.redirect('nhs-number');
  }else {
    res.redirect('are-you-studying');
  }
});

// Have you ever held UK citizenship? //
router.get(/citizenshipUK/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    // res.redirect('uk-student');
    res.redirect('national-other-eu');
  } else if (req.query.UKresidency === "No") {
    // res.redirect('nhs-number');
    res.redirect('where-were-you-born');
  } else {
    res.redirect('ever-held-uk-citizenship');
  }
});

// Have you renounced you UK citizenship? //
router.get(/renouncedUK/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    // res.redirect('uk-student');
    // res.redirect('are-you-studying');
    res.redirect('nhs-number-dual');
  } else if (req.query.UKresidency === "No") {
    // res.redirect('nhs-number');
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('renounced');
  }
});

// Are you a national of another EU country? //
router.get(/nationalOtherEu/, function (req,res) {
  if(req.query.UKresidency === "Yes") {
    res.redirect('where-were-you-born');
  } else if (req.query.UKresidency === "No") {
    // res.redirect('nhs-number');
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('national-other-eu');
  }
});

// Are you a UK national? - S1 holders //
router.get(/s1HolderUkNational/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('cya-s1-uk');
  } else if (req.query.radiosPW === "No") {
    res.redirect('settled-status');
  } else {
    res.redirect('uk-national');
  }
});

// Are you a UK national? - students already in EU //
router.get(/studentUkNational/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('course-country');
  } else if (req.query.radiosPW === "No") {
    res.redirect('settled-status-student');
  } else {
    res.redirect('uk-national');
  }
});

// Do you intend to study in the EU, EEA or Switzerland? UK NATIONAL//
router.get(/ukStudent/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('course-country');
  } else if (req.query.radiosPW === "No") {
    // res.redirect('cya-uk');
    // res.redirect('posted-worker');
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('uk-student');
  }
});

// Are you a posted worker working in the EU, EEA or Switzerland? UK NATIONAL//
router.get(/ukPostedWorker/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('pw-country');
  } else if (req.query.radiosPW === "No") {
    res.redirect('cya-uk');
  } else {
    res.redirect('posted-worker');
  }
});

// Do you intend to study in the EU, EEA or Switzerland? EUSS //
router.get(/euStudent/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('course-country-eu');
  } else if (req.query.radiosPW === "No") {
    res.redirect('nhs-number');
  } else {
    res.redirect('eu-student');
  }
});

// Do you intend to study in the EU, EEA or Switzerland? ALREADY LIVING IN EU //
router.get(/s1Student/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('uk-national-student');
  } else if (req.query.radiosPW === "No") {
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('student');
  }
});


// Are you RETIRED? //
router.get(/euRetired/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('uk-national');
  } else if (req.query.radiosPW === "No") {
    res.redirect('student');
  } else {
    res.redirect('uk-national');
  }
});

// Do you have UK settled or pre-settled status? //
router.get(/settledStatus/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('nhs-number');
  } else if (req.query.radiosPW === "No") {
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('settled-status');
  }
});

// Do you have UK settled or pre-settled status? - S1 holders //
router.get(/RetiredSettledStatus/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('nhs-number');
  } else if (req.query.radiosPW === "No") {
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('settled-status');
  }
});

// Do you have UK settled or pre-settled status? - students already in EU //
router.get(/studentSettledStatus/, function (req,res) {
  if(req.query.radiosPW === "Yes") {
    res.redirect('course-country-eu');
  } else if (req.query.radiosPW === "No") {
    res.redirect('not-entitled-ehic');
  } else {
    res.redirect('settled-status');
  }
});


// EHIC review result, review-result-student.html
router.get(/ehicApproval/, function (req,res) {
  if(req.query.radiosResult === "Approved with evidence") {
    res.redirect('done-ehic-approved');
  } else if (req.query.radiosResult === "Approved but no evidence provided") {
    res.redirect('done-ehic-approved');
  } else if (req.query.radiosResult === "Evidence requested") {
    res.redirect('done-ehic-review');
  } else if (req.query.radiosResult === "Not approved") {
    res.redirect('exit-ehic-rejected-2');
  } else {
    res.redirect('review-result-student');
  }
})

// EHIC/GHIC review evidence, review-evidence-options.html
router.get(/reviewEvidence/, function (req,res) {
  if(req.query.radiosResult === "Approved with evidence") {
    res.redirect('done-ehic-approved');
  } 
  // else if (req.query.radiosResult === "Approved but no evidence provided") {
  //   res.redirect('done-ehic-approved');
  // } 
  else if (req.query.radiosResult === "Evidence requested") {
    res.redirect('done-ehic-review');
  } else if (req.query.radiosResult === "Evidence requested email") {
    res.redirect('review-email-options');
  } else if (req.query.radiosResult === "Not approved") {
    res.redirect('exit-ehic-rejected-2');
  } else {
    res.redirect('review-evidence-options');
  }
})

// EHIC/GHIC review evidence, review-evidence-options.html (Version 2)
router.get(/v2ReviewEvidence/, function (req,res) {
  if(req.query.radiosResult === "Approved with evidence") {
    res.redirect('done-ehic-approved');
  } 
  // else if (req.query.radiosResult === "Approved but no evidence provided") {
  //   res.redirect('done-ehic-approved');
  // } 
  else if (req.query.radiosResult === "Evidence requested") {
    res.redirect('done-ehic-review');
  } else if (req.query.radiosResult === "Evidence requested email") {
    res.redirect('send-email');
  } else if (req.query.radiosResult === "Not approved") {
    res.redirect('exit-ehic-rejected-2');
  } else {
    res.redirect('review-evidence-options');
  }
})

// POST handler for send-email-v3
router.post('/admin/document-upload-all/send-email-v3/', function(req, res) {
  res.render('v17_0/admin/document-upload-all/send-email-v3', {formData: req.body});
});

// POST handler for review-email
router.post('/admin/document-upload-all/review-email/', function(req, res) {

  for(var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      req.body[key] = req.body[key].replace(/\r\n/gi, "<br />");
    }
  }
  res.render('v17_0/admin/document-upload-all/review-email', {formData: req.body});
});

// POST handler for review-email (Simplified)
router.post('/admin/document-upload-all-2/review-email/', function(req, res) {
  for(var key in req.body) {
    if (req.body.hasOwnProperty(key)) {
      req.body[key] = req.body[key].replace(/\r\n/gi, "<br />");
    }
  }
  res.render('v17_0/admin/document-upload-all/review-email', {formData: req.body});
});


// EHIC review result, review-result-student.html
router.get(/ehicEuRelative/, function (req,res) {
  if(req.query.radiosResult === "Approved with evidence") {
    res.redirect('done-ehic-approved-eu-relative');
  } else if (req.query.radiosResult === "Approved but no evidence provided") {
    res.redirect('done-ehic-approved-eu-relative');
  } else if (req.query.radiosResult === "Evidence requested") {
    res.redirect('done-ehic-review-eu-relative');
  } else if (req.query.radiosResult === "Not approved") {
    res.redirect('exit-ehic-rejected-3');
  } else {
    res.redirect('review-evidence-euss-relative');
  }
});


// EHIC review NHSD checks results, review-checks-evidence-1.html
router.get(/checksEvidence/, function (req,res) {
  if(req.query.radiosResult === "Approved with evidence") {
    res.redirect('done-ehic-approved-checks');
  } else if (req.query.radiosResult === "Approved but no evidence provided") {
    res.redirect('done-ehic-approved-checks');
  } else if (req.query.radiosResult === "Evidence requested") {
    res.redirect('done-ehic-review-checks');
  } else if (req.query.radiosResult === "Not approved") {
    res.redirect('exit-ehic-rejected-2-checks');
  } else {
    res.redirect('review-checks-evidence-1');
  }
});


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
    // res.redirect('pension-res-country');
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


// Do you get paid a State Pension from [country of residence]?
router.get(/pensionResidence/, function (req,res) {
  if(req.query.pensionResidence === "Yes") {
    res.redirect('pension-germany');
  } else if (req.query.pensionResidence === "No") {
    res.redirect('pension-eea');
  } else {
    res.redirect('pension-res-country');
  }
});


// Do you get paid a State Pension from any other EEA country or Switzerland?
router.get(/pensionEEA/, function (req,res) {
  if(req.query.thirdcountrypension === "Yes") {
    res.redirect('dwp-api-tc-pass');
  } else if (req.query.thirdcountrypension === "No") {
    res.redirect('dwp-api-fail');
  } else {
    res.redirect('pension-eea');
  }
});

// DWP API fail - What would you like to do?
router.get(/amendSkip/, function (req,res) {
  if(req.query.amendSkip === "amend") {
    res.redirect('amend-personal-details');
  } else if (req.query.amendSkip === "skip") {
    res.redirect('cya-');
  } else {
    res.redirect('dwp-api-fail');
  }
});

// Amend details - Next Step
router.get(/resubmitCheck/, function (req,res) {
  if(req.query.resubmitCheck === "resubmit") {
    res.redirect('dwp-api-pass');
  } else if (req.query.resubmitCheck === "allcorrect") {
    res.redirect('cya-dwp-s1-iss-1');
  } else {
    res.redirect('amend-personal-details');
  }
});

// Do you pay Statutory Health Contributions to Germany?
router.get(/pensionGermany/, function (req,res) {
  if(req.query.pensionGermany === "Yes") {
    res.redirect('done-s1-rej');
  } else if (req.query.pensionGermany === "No") {
    res.redirect('pension-eea');
  } else {
    res.redirect('pension-germany');
  }
});

// Do you pay Statutory Health Contributions to Germany? - WHEN UPDATING PENSION CONTS
router.get(/contsPensionGermany/, function (req,res) {
  if(req.query.contsPensionGermany === "Yes") {
    res.redirect('done-s1-rej');
  } else if (req.query.contsPensionGermany === "No") {
    res.redirect('pension-start-date');
  } else {
    res.redirect('pension-germany-conts');
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
    res.redirect('info-requested');
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
    res.redirect('another-pension-3');
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

   //Information to be sent by an email for tcp evidence, tcp-info-email-4.html
   router.get(/saturn/, function (req,res) {
    if(req.query.nameEmail === "Yes") {
      res.redirect('tcp-enter-email-5');
    } else if(req.query.nameEmail === "No") {
      res.redirect('add-dep-to-app-13');
    } else {
      res.redirect('tcp-info-email-5');
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
router.get(/sourceOfEntitlement/, function (req,res) {
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
    // res.redirect('pension-date');
    res.redirect('pension-res-country');
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

// Start folder specific routes
// router.use('/v13_0', require('./views/v13_0/_routes'));




module.exports = router