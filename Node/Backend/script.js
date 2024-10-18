const express = require("express");
const app = express();

// setup ejs - integrate JS in html
app.set("view engine", "ejs");

// use static files
app.use(express.static("./public"));

// Middleware: always executes before a route is hit
app.use((req, res, next) => {
  // console.log(req.params)
  console.log("Hello from middleware");
  next();
});

app.get("/", function (req, res) {
  // res.send("hello from");
  res.render("index", { name: "Durvesh Jagtap" });
});

app.get("/profile", function (req, res) {
  res.send("hello from profile");
});

app.get("/error", function(req, res, next){
    throw new Error()
});

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

app.listen(3000);
