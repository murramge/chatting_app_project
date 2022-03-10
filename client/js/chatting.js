$(function(){
    const socket = io.connect();
    socket.on('message',function(data){
        let name = document.getElementById("name").value;
        if(name == data.name) {
        $('#content').append($('<p class="talk me">').text(data.message)); 
        }
        else {
        $('#content').append($('<p class="talk other">').text(data.message));
        }
    })

    socket.on('preload',function(data){
        let name = document.getElementById("name").value;
        if(name == data.name) {
        $('#content').append($('<p class="talk me">').text(data.message)); 
        }
        else {
        $('#content').append($('<p class="talk other">').text(data.message));
            }
        
    });

    $(document).on("click",'#button', (function(){
    socket.emit('message',
        {
            name: $('#name').val(),
            message:$('#message').val()
        }
        );
        $('#message').val('');
    }));

});