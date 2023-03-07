// External dependencies
const express = require('express');
const { date } = require('gulp-util');
const router = express.Router();


// Route index page
// router.get('/', function (req, res) {
//   res.render('index');
// });

// add your routes here




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

  //GHIC - plan-to-emigrate
router.post('/ghic-emigration', function (req, res) {

  const emigrationStatus = req.body.emigration;

  if (emigrationStatus === "Yes"){
    req.session.data = {}
    res.redirect('admin/ghic/leave-date')
  }
  else {
    res.redirect('admin/ghic/done')
  }

})


module.exports = router