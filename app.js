const express = require('express');
const socket = require('socket.io');

var app = express();

var server = app.listen(80, function(){
  console.log('listening to requests on port 4000');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  socket.on('chat', function(data){
    console.log(data);
    io.sockets.emit('chat', data);
  });
});
