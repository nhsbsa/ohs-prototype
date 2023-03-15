// External dependencies
const express = require('express');
const { date } = require('gulp-util');
const router = express.Router();


// Route index page
// router.get('/', function (req, res) {
//   res.render('index');
// });

// add your routes here

  // /v19_0/admin/ghic/plan-to-emigrate
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

//EHIC - plan-to-emigrate
router.post('/ehic-emigration', function (req, res) {

  const emigrationStatus = req.body.emigration;

  if (emigrationStatus === "Yes"){
    res.redirect('admin/ehic/leave-date')
  }
  else {
    res.redirect('admin/ghic/done')
  }
})


module.exports = router