var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// flash: is used to transfer the data from one route to another
router.get('/useFlash', (req, res) => {
  // set flash message in req
  req.flash("name", "Durvesh");
  res.send("Flash data created");
});

router.get('/getFlash', (req, res) => {
  // get flash message from req
  console.log(req.flash("name"));
  res.send("Got flash message from /useFlash route");
});

module.exports = router;