var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./posts');
const passport = require('passport');

const localStrategy = require('passport-local')
passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pinterest' });
});

router.get('/profile', isLoggedIn, async (req, res, next) => {
  const user = await userModel.findOne({
    username: req.session.passport.user
  });
  // console.log(req.session.passport.user);
  res.render("profile", { user });
});

router.get('/login', (req, res, next) => {
  // console.log(req.flash("error"));
  res.render('login', {error: req.flash('error')});
});

router.get('/feed', (req, res, next) => {
  res.render('feed');
});

router.post('/register', (req, res) => {
  // console.log("hey");
  const {username, email, fullname} = req.body;
  const userData = new userModel({username, email, fullname});

  // register method - hashes the password and stores details in the db
  userModel.register(userData, req.body.password)
  .then(function(){
    console.log("hello");
    // authenticates user with local strategy and logs in the user, establishing the session
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
  .catch(err => {
    console.log('Error during registration:', err);
    res.redirect('/');
  });
});

router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
  // passport automatically stores msg in req.flash("error")
}), function(req, res){
});

router.get('/logout', (req, res) => {
  req.logout(function(err){
    if(err)
      return next(err);
    res.redirect('/');
  })
});

function isLoggedIn(req, res, next){
  // isAuthenticated is passport.js method
  if(req.isAuthenticated())
    return next(); //next route la req pass krnr, kiva next middleware in req-res cycle
  res.redirect('/login');
};

module.exports = router;
