// External dependencies
const express = require('express');
const { date } = require('gulp-util');
const router = express.Router();


// Route index page
// router.get('/', function (req, res) {
//   res.render('index');
// });

// add your routes here

//GHIC - plan to emigrate /v19_0/admin/ghic/plan-to-emigrate
router.post('/ghic-emigration', function (req, res) {

  const emigrationStatus = req.body.emigration;
  const emigrationStatusNew = req.body.emigrationNew;

  if (emigrationStatus === "Yes" || emigrationStatusNew === "Yes"){
    res.redirect('admin/ghic/leave-date')
  }
  else {
    req.session.data.leaveDate = ""
    res.redirect('admin/ghic/done')
  }

})

//EHIC - plan-to-emigrate - /v19_0/admin/ghic/plan-to-emigrate
router.post('/ehic-emigration', function (req, res) {

  const emigrationStatus = req.body.emigration;
  const emigrationStatusNew = req.body.emigrationNew;

  if (emigrationStatus === "Yes" || emigrationStatusNew === "Yes"){
    res.redirect('admin/ehic/leave-date')
  }
  else {
    req.session.data.leaveDate = ""
    res.redirect('admin/ehic/done')
  }
})

// ----------------------- //
// ----- S2 Test v2 ------ //
// -------------------- ---//

// S2 Maternity review evidence, review-evidence-maternity-options.html
router.post([/s2maternityReviewEvidenceNew/, /s2maternityReviewEvidenceNewErr/], function (req,res) {
  if(req.body.evidenceResult === "Approved with evidence") {
    res.redirect('review-evidence-maternity-email-options');
  } else if (req.body.evidenceResult === "Approved with evidence and amend dates") {
    res.redirect('check-end-date-new');
  } else if (req.body.evidenceResult === "Evidence requested email") {
    res.redirect('review-evidence-maternity-email-options');
  } else if (req.body.evidenceResult === "Evidence requested") {
    res.redirect('review-evidence-maternity-options-warning');
  } else if (req.body.evidenceResult === "Not approved") {
    res.redirect('done-maternity-rejected');
  } else {
    res.redirect('review-evidence-maternity-options-error');
  }
})

// S2 Maternity review evidence, review-evidence-maternity-options.html
router.post([/check-end-date-new/, /check-end-date-error/], function (req,res) {
  if(req.body.checkDate === "Yes") {
    res.redirect('check-end-date-answers');
  } else if (req.body.checkDate === "No") {
    res.redirect('treatment-end-maternity-new');
  } else {
    res.redirect('check-end-date-error');
  }
})


// S2 Maternity review evidence, review-evidence-maternity-options-warning.html 
router.post(/s2manualemailnew/, function (req,res) {
  if(req.body.radiosResult === "Approved with evidence") {
    res.redirect('done-maternity-evidence-approved');
  } else if (req.body.radiosResult === "Evidence requested email") {
    res.redirect('review-evidence-maternity-email-options');
  } else if (req.body.radiosResult === "Evidence requested") {
    res.redirect('done-maternity-manual-email');
  } else if (req.body.radiosResult === "Not approved") {
    res.redirect('done-maternity-rejected');
  } else {
    res.redirect('review-evidence-maternity-options-warning');
  }
})


// When is the treatment expected to end? (Maternity) //
router.post([/treatment-end-maternity-new/, /treatment-end-max-error-maternity-new/, /treatment-end-invalid-error-maternity-new/, /treatment-end-error-maternity-new/], function (req, res) {
  const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/](\d{4})$/;

  var treatmentEndM = req.session.data['treatmentEndMNew'];
  var maxEnd = "28/09/2023";

  var lastRunEndDate = new Date(treatmentEndM.split('/')[2], treatmentEndM.split('/')[1], treatmentEndM.split('/')[0]);

  var lastRunMaxEndDate = new Date(maxEnd.split('/')[2], maxEnd.split('/')[1], maxEnd.split('/')[0]);


  if (dateReg.test(treatmentEndM) && lastRunEndDate <= lastRunMaxEndDate) {
    res.redirect('check-end-date-answers');
  } else if(dateReg.test(treatmentEndM) && lastRunEndDate > lastRunMaxEndDate) {
    res.redirect('treatment-end-max-error-maternity-new');
  } else if (treatmentEndM !== '' && !dateReg.test(treatmentEndM)) {
    res.redirect('treatment-end-invalid-error-maternity-new');
  } else if (treatmentEndM === '') {
    res.redirect('treatment-end-error-maternity-new');
  }
})

router.get(/person-case-maternity-awaiting-review-new/, function (req, res) {
  var leaveDate = req.session.data['leaveDate'];
  var treatmentStartM = req.session.data['treatmentStartM'];
  var treatmentEndM = req.session.data['treatmentEndM'];

  if(!leaveDate) {
    leaveDate = "27/03/2023";
  }
  if(!treatmentStartM) {
    treatmentStartM = "15/05/2023";
  }
  if(!treatmentEndM) {
    treatmentEndMN = "28/09/2023";
  }
  res.render('v19_0/admin/s2/new-version/person-case-maternity-awaiting-review-new', {leaveDate: leaveDate,  treatmentStartM:  treatmentStartM,  treatmentEndM:  treatmentEndM});
})


module.exports = router