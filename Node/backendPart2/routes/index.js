var express = require('express');
var router = express.Router();
const userModel = require("./users");

// ---------------Code related to flash messages-----------------------
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// // flash: is used to transfer the data from one route to another
// router.get('/useFlash', (req, res) => {
//   // set flash message in req
//   req.flash("name", "Durvesh");
//   res.send("Flash data created");
// });

// router.get('/getFlash', (req, res) => {
//   // get flash message from req
//   console.log(req.flash("name"));
//   res.send("Got flash message from /useFlash route");
// });


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async (req, res) => {
  let userDetails = await userModel.create({
    username: "Aftab",
    nickname: "AB",
    description: "Passionate about coding and good frontend developer",
    categories: ['react', 'html', 'css', 'figma', 'UI/UX']
  });

  res.send(userDetails);
});

// 1. perform case insensitive search in mongoose
router.get('/find', async (req, res) => {
  //RegExp() is used to perform case insensitive search, RegExp('name', 'flags');
  var regex = RegExp("Durvesh", 'i');
  let user = await userModel.find({username: regex});
  res.send(user);
});

// 2.find documents were array feild contains all of a set of values
router.get('/find1', async (req, res) => {
  var regex = RegExp("js", 'i');
  // $all accepts an array in order to search from one or more tags
  let user = await userModel.find({categories: {$all: regex}});
  res.send(user);
});

// 3. how can i search in the documents with a specific date range in Mongoose?
router.get('/find2', async (req, res) => {
  let user = await userModel.find();
  res.send(user);
});


module.exports = router;