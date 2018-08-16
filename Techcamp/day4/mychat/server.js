'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http); //5.追記
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});

//5.追記
io.on('connection', (socket) => {
    console.log('a user connected');

    //10.追記
    socket.on('chat message', (msg) => {
      // io.emit('chat message', msg); //11.追記
      socket.broadcast.emit('chat message',msg)
        console.log(`message: ${msg}`);
    });

    socket.on('disconnect', () => {
   console.log('user disconnected');
 });

});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
