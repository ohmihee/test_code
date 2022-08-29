"use strict";

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (event) => {
  console.log("나알==", event, "e===");
  if (event.code === "Enter") {
    send();
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
  chatInput.value = "";
}

sendButton.addEventListener("click", send);

// socket.emit("chatting", "from front");
// socket.emit()의 첫번째 인자는 채팅명과 같다.

//console.log(socket);

socket.on("chatting", (data) => {
  // 서버로부터 받은 값을 data에 담아 받는다.
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item.makeLi();
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent" : "received");
    const dom = `
    <span class="profile">
        <span class="user">${this.name}</span>
            <img class="image" src="https://placeimg.com/200/50/any" alt="" />
        </span>
    </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>
    `;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}
