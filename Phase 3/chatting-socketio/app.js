let express=require("express");

let app=express();

let http=require("http").Server(app);

let io=require('socket.io')(http);

let randomMsgs = ["Awesome", "Nice", "Cool", "Wow", "Great"];
let randomMsgIndex = Math.floor(Math.random()*randomMsgs.length);
let randomMsg = randomMsgs[randomMsgIndex];
ran = ()=> {
    return Math.floor(Math.random()*randomMsgs.length);
}

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    socket.on("clientMessage",(msg)=> {
        console.log(msg);
        
        socket.emit("serverMessage",randomMsgs[ran()]);
    })
    
})

http.listen(9090,()=>console.log("Server running on port number 9090"));