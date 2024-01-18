const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const { initSocket } = require('./socket');

const PORT = 8080;
const DB_URL = "mongodb+srv://sultokTheF:utDy0cKtsjPVVGE1@chat.kcom9ae.mongodb.net/";

const app = express();;
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors())
app.use(express.json());

// Connect to MongoDB
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Initialize Socket.IO
initSocket(io);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
