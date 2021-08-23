let fs=require("fs");
let readline=require("readline-sync");

let f_name=readline.question("Enter your first name: ");
let l_name=readline.question("Enter your last name: ");
let gen=readline.question("Enter your gender: ");
let emailId=readline.questionEMail("Enter your email id: ")
dt=Date().toLocaleString();

let users=JSON.parse(fs.readFileSync("users.json").toString());
users.push({first_name:f_name,last_name:l_name,gender:gen,email:emailId,date_time:dt});
fs.writeFileSync("users.json",JSON.stringify(users));

console.log("Stored new user");
console.log(users);