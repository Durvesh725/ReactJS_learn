var express = require('express');
var router = express.Router();
var userModel = require('./users')

router.get('/', (req, res) => {
  // set cookie on client (Browser) side
  res.cookie("age", 22);

  // set session value
  req.session.ban = true;
  res.render("index");
});

router.get('/getCookie', (req, res) => {
  // read cookie on Server
  console.log(req.cookies);
  res.send("check");
});

router.get('/create', async (req, res) => {
  const userDetails = await userModel.create({
    username: "JAzZ",
    name: "Durvesh",
    age: 22
  })
  res.send(userDetails);
});

router.get('/allUsers', async (req, res) => {
  const allUsers = await userModel.find();
  res.send(allUsers);
});

router.get('/checkban', (req, res) => {
  if(req.session.ban === true){
    res.send("You're banned!");
  }
  else{
    res.send("You're not banned");
  }
  // console.log(req.session);
});

router.get('/removeban', (req, res) => {
  req.session.destroy((err) => {
    if(err)
      throw err;
    else 
      res.send("ban removed");
  })
});

module.exports = router;

// if session is made in any route, it can be used in any route before or after it
// if server restarts, the session gets deleted
