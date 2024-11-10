const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/newAppDB")

const schema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },

  password:{
    type: String,
  },

  // association with post model - A User can have many posts - one to many relationships
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],

  dp:{
    type: String,
  },

  email: {
    type: String,
    required: true
  },

  fullname: {
    type: String,
    required: true
  },
});

schema.plugin(plm);
// 

module.exports = mongoose.model("User", schema);
