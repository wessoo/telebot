var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });

//   socket.on('chat message', function(msg) {
//   	console.log('message: ' + msg);
//   });
// });

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('left', function() {
  	console.log('pressed left');
  	io.emit('turn left');
  });

  socket.on('up', function() {
  	console.log('pressed up');
  	io.emit('move forward');
  });

  socket.on('right', function() {
  	console.log('pressed right');
  	io.emit('turn right');
  });

  socket.on('down', function() {
  	console.log('pressed down');
  	io.emit('move back');
  });

  socket.on('panleft', function() {
  	console.log('pressed left');
  	io.emit('pan left');
  });

  socket.on('panup', function() {
  	console.log('pressed up');
  	io.emit('pan up');
  });

  socket.on('panright', function() {
  	console.log('pressed right');
  	io.emit('pan right');
  });

  socket.on('pandown', function() {
  	console.log('pressed down');
  	io.emit('pan down');
  });

  socket.on('space', function() {
  	console.log('pressed space');
  	io.emit('fire');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});