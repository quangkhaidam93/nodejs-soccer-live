// const socketEvents = require('../../src/constants/socketEvents');
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

const socket = io();

const inboxPeople = document.querySelector(".inbox__people");

let userName = "";

const inputField = document.querySelector(".message_form__input");
const messageForm = document.querySelector(".message_form");
const messageBox = document.querySelector(".messages__history");


const newUserConnected = (roomId) => {
  const userName = `User${Math.floor(Math.random() * 1000000)}`;
  socket.emit(socketEvents.ROOM_EVENT.CONNECT_ROOM, {userName, roomId});
  addToUsersBox(userName);
};

const addToUsersBox = (userName) => {
  if (!!document.querySelector(`.${userName}-userlist`)) {
    return;
  }

  const userBox = `
    <div class="chat_ib ${userName}-userlist">
      <h5>${userName}</h5>
    </div>
  `;
  inboxPeople.innerHTML += userBox;
};

function justTest() {
  console.log('Test done');
}

// new user is created so we generate nickname and emit event
const connectChatRoom = () => {
  const roomId = document.getElementById('room_id').value;
  console.log('connectChatRoom triggered', roomId);
  newUserConnected(roomId);
}

const addNewMessage = ({ user, message }) => {
  const time = new Date();
  const formattedTime = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });

  const receivedMsg = `
  <div class="incoming__message">
    <div class="received__message">
      <p>${message}</p>
      <div class="message__info">
        <span class="message__author">${user}</span>
        <span class="time_date">${formattedTime}</span>
      </div>
    </div>
  </div>`;

  const myMsg = `
  <div class="outgoing__message">
    <div class="sent__message">
      <p>${message}</p>
      <div class="message__info">
        <span class="time_date">${formattedTime}</span>
      </div>
    </div>
  </div>`;

  messageBox.innerHTML += user === userName ? myMsg : receivedMsg;
};

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputField.value) {
    return;
  }

  const roomId = document.getElementById('room_id').value;

  socket.emit(socketEvents.ROOM_EVENT.SEND_MESSAGE, {
    message: inputField.value,
    userName,
    roomId,
  });

  inputField.value = "";
});


socket.on(socketEvents.ROOM_EVENT.USER_CONNECTED, function (userName) {
  console.log('Client listen user connected', userName);
  addToUsersBox(userName);
  // data.map((user) => addToUsersBox(user));
});

socket.on(socketEvents.ROOM_EVENT.USER_DISCONNECTED, function (userName) {
  document.querySelector(`.${userName}-userlist`).remove();
});

socket.on(socketEvents.ROOM_EVENT.RECEIVE_MESSAGE, function (payload) {
  console.log("Client receive message");
  const { userName, message } = payload;
  addNewMessage({ user: userName, message });
})