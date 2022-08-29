const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
// websocket 사용을 위해 http 모듈을 불러옴
const server = http.createServer(app);
// express로 구현한 app 을 인자로 넣어줌으로써 해당 앱이 http로 실행될 수 있도록 해준다.

const socketIO = require("socket.io");
const moment = require("moment");
// 시간을 특정 양식에 맞추어 출력할 수 있도록 해주는 라이르러리이다.

const io = socketIO(server);
// 서버를 다시 socketIO에 담아준 후 io에 할당한다.
// 이후에는 io를 통해 websocket을 사용할 수 있다.

app.use(express.static(path.join(__dirname, "src")));
// 해당 __dirname은 해당 프로젝트 폴더의 경로명을 의미한다.
// path.join을 통해 src 폴더를 지정하여 준다.

const PORT = process.env.PORT ? process.env.PORT : 3000;

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    // socket.emit()에서 첫번째 인자로 설정해둔 채팅명을 통해 연결한다.
    // 해당 요청에 대해 data라는 변수에 담아 받는다.
    const { name, msg } = data;

    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h:ss:A"),
    });
  });
});
// connection을 연결이 이루어지면, 해당 연결에 대한 요청값을 socket에 담아 전달한다.

app.use(function (req, res, next) {
  res.header("ngrok-skip-browser-warning", "*");
  next();
});

server.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(
    `
================================================
       💥 server start port ${PORT} 💥
=================================================
        `
  );
});
