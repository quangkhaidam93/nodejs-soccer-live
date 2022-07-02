const socket = require("socket.io");
const envConfigs = require("../../config/environment");
const roomHandler = require("./roomHandler");

const activeUsers = new Set();

const socketConnection = httpServer => {
  const io = socket(httpServer, {
    cors: {
      origin: envConfigs.serverDomain,
      methods: ["GET", "POST"],
      transports: ["websocket", "polling"],
      credentials: true,
    },
    allowEIO3: true,
  });

  io.on("connect", (socket) => {
    roomHandler(io, socket);
  });
};

// class Socket {
//   constructor(httpServer) {
//     const io = socket(httpServer, {
//       cors: {
//         origin: "http://localhost:8080",
//         methods: ["GET", "POST"],
//         transports: ["websocket", "polling"],
//         credentials: true,
//       },
//       allowEIO3: true,
//     });

//     io.on("connect", (socket) => {
//       socket.on("new user", function (data) {
//         socket.userId = data;
//         activeUsers.add(data);
//         io.emit("new user", [...activeUsers]);
//       });

//       socket.on("disconnect", () => {
//         activeUsers.delete(socket.userId);
//         socket.emit("user disconnected", socket.userId);
//       });
//     });
//   }
// }

module.exports = socketConnection;
