var socket = io.connect('http://localhost:4000');
//var socket = io.connect('http://yeti.cf:80');

var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    state = document.getElementById('state');
var state1;
function toggle(button)
{
  if(button.value=='OFF'){
   button.value='ON';
   state1=true;
  }
  else{
   button.value='OFF';
   state1=false;
  }

   socket.emit('chat', {
     //message: message.value,
     //handle: handle.value,
     state: state1
   });
   console.log(button.value);
}
btn.addEventListener('click', function(){
  console.log(onoff.value);
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
    output.innerHTML += '<p><strong>' + data.handle + '</strong></p>';
});
