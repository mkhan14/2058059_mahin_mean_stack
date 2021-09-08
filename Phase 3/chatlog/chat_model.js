// load the module
let mongoose = require("mongoose");

mongoose.pluralize(null); // to avoid creating in lower case with s postfix.
// create the schema
let chatSchema = mongoose.Schema({
  name: String,
  message: String,
});


let chatModel = mongoose.model("Chat", chatSchema);

module.exports = chatModel; 