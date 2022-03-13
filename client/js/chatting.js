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
        let chatid = document.getElementById("_id").value;
        let messages = data.message;
        console.log(messages);
        if(name == data.name) {
            if(chatid == data._id) {
            for (let i=0; i< messages.length; i++) {
            $('#content').append($('<p class="talk me">').text(messages[i]));
            } 
            }
        }
        
    });

    $(document).on("click",'#button', (function(){
    socket.emit('message',
        {
            _id: $('#_id').val(),
            name: $('#name').val(),
            message:$('#message').val()
        });
        $('#message').val('');
    }));

});