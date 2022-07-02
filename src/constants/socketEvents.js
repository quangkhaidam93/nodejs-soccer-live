const socketEvents = {
  ROOM_EVENT: {
    CONNECT_ROOM: 'connect_room',
    LEAVE_ROOM: 'leave_room',
    USER_CONNECTED: 'user_connected',
    USER_DISCONNECTED: 'user_disconnected',
    SEND_MESSAGE: 'send_message',
    RECEIVE_MESSAGE: 'receive_message',
  }
}

module.exports = socketEvents;