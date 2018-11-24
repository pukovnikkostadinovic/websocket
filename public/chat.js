var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    state = document.getElementById('state');

btn.addEventListener('click', function(){
  if(state.value=='true'){
    state = true;
  }else{
    state = false;
  }
  socket.emit('chat', {
    //message: message.value,
    //handle: handle.value,
    state: state
  });
});

socket.on('chat', function(data){
  //output.innerHTML += '<p><strong>' + data.handle + ':</strong>'+data.message+'</p>';
    output.innerHTML += '<p><strong>' + data.state + '</strong></p>';
});
