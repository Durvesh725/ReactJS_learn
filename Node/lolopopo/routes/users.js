const mongoose = require('mongoose');

// database creation - student db
mongoose.connect("mongodb://127.0.0.1:27017/practise");

// make schema
const schema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

module.exports = mongoose.model("db1", schema);

