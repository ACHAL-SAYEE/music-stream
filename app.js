const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer((req, res) => {
  res.end("This is the Socket.IO server.");
});

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("join", (roomId) => {
    socket.join(roomId);
  });

  socket.on("send", (roomId, data) => {
    socket.to(roomId).emit("brodcast-audio", data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
