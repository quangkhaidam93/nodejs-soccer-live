const socketEvents = require('../constants/socketEvents');
const messageService = require('../components/message/service');

const roomHandler = (io, socket) => {
  const connectToRoom = (payload) => {
    console.log("Server connectToRoom", payload.roomId, payload.userName);
    const { roomId, userName } = payload;
    socket.join(roomId);
    // console.log('All rooms', io.sockets.adapter.rooms);
    // TODO: Get user information
    socket.broadcast.to(roomId).emit(socketEvents.ROOM_EVENT.USER_CONNECTED, userName);
  }

  const disconnectFromRoom = (payload) => {
    console.log("Server disconnectFromRoom");
    const { roomId, username } = payload;
    // TODO: Get user information
    socket.broadcast.to(roomId).emit(socketEvents.ROOM_EVENT.USER_DISCONNECTED, username); 
  }

  const sendMessage = (payload) => {
    console.log("Server sendMessage");
    const { roomId, message, userName } = payload;
    messageService.createMessage({ name: userName, message, roomId });
    io.to(roomId).emit(socketEvents.ROOM_EVENT.RECEIVE_MESSAGE, {userName, message});
  }

  socket.on(socketEvents.ROOM_EVENT.CONNECT_ROOM, connectToRoom);
  socket.on(socketEvents.ROOM_EVENT.LEAVE_ROOM, disconnectFromRoom);
  socket.on(socketEvents.ROOM_EVENT.SEND_MESSAGE, sendMessage);
}

module.exports = roomHandler;