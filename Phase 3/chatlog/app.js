let express = require("express");

let app = express();

let http = require("http").Server(app);

let io = require("socket.io")(http);

let chatsModel = require("./chat_model.js");

let mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("clientMessage", (msg) => {
    console.log(msg.name);

    let url = "mongodb://localhost:27017/tcsmean";
    mongoose.pluralize(null); // to avoid lower case collection creation and adding s.

    // connect the database it return promise object
    mongoose
      .connect(url)
      .then((res) => console.log("connected"))
      .catch((err) => console.log(err));

    //to use this db connection we have to call function
    let db = mongoose.connection;
    db.once("open", () => {
      // using model we have to create the reference.
      let c1 = new chatsModel({
        name: msg.name,
        message: msg.message,
      });

      chatsModel.create(c1, (err, result) => {
        if (!err) {
          console.log(result);
        } else {
          console.log(err);
        }
        mongoose.disconnect();
      });
    });

    socket.emit("serverMessage", "");
  });
});

http.listen(9090, () => console.log("Server running on port number 9090"));
