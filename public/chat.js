var socket = io.connect('http://localhost:4000');
//var socket = io.connect('http://yeti.cf:4000');

var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    state = document.getElementById('state');
var state1;

btn.addEventListener('click', function(){
  console.log(state.value);
  if(state.value=='true'){
    state1 = true;
  }else{
    state1 = false;
  }
  socket.emit('chat', {
    //message: message.value,
    //handle: handle.value,
    state: state1
  });
});

socket.on('chat', function(data){
  //output.innerHTML += '<p><strong>' + data.handle + ':</strong>'+data.message+'</p>';
    output.innerHTML = '<p><strong>' + data.state + '</strong></p>';
});
