let socket = io.connect("http://localhost:4000");
var message = document.getElementById("message");
var button = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");
button.addEventListener("click", () => {
  //let socket = io.connect("http://localhost:4000");
  socket.emit("sendMessage", {
    message: message.value,
    name: username.value,
  });
});

socket.on("broadcastMessage", function (data) {
  output.innerHTML +=
    "<p><strong>" + data.name + ": </strong>" + data.message + "</p>";
});
