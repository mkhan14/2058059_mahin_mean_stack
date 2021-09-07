// load the module
let mongoose = require("mongoose");

mongoose.pluralize(null); // to avoid creating in lower case with s postfix.
// create the schema
let courseSchema = mongoose.Schema({
  _id: Number,
  name: String,
  description: String,
  amount: Number,
});


let courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel; 
