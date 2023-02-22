const express = require("express");
const socket = require("socket.io");
var app = express();
var server = app.listen(4000, function () {
  console.log("Listening to Port 4000");
});
app.use(express.static("public"));

var upgradedServer = socket(server);

upgradedServer.on("connection", (socket) => {
  socket.on("sendMessage", (data) => {
    //for all
    upgradedServer.emit("broadcastMessage", data);
    //for everyone other then sender
    //socket.broadcast.emit("broadcastMessage", data);
  });
  console.log("Connection created successfully!!!!");
});
