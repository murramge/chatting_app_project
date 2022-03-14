$(function(){
    const socket = io.connect();
    socket.on('message',function(data){
        let chat_id = document.getElementById("chat_id").value;
        let chattingroom_id = document.getElementById("chattingroom_id").value;
        let messages = data.message;
        console.log(messages);

            if(chattingroom_id == data.chattingroom_id) {
                $('#content').append($('<p class="talk me">').text(messages));

            }
    })

    socket.on('preload',function(data){
        let chat_id = document.getElementById("chat_id").value;
        let chattingroom_id = document.getElementById("chattingroom_id").value;
        let messages = data.message;
        console.log(messages);

            if(chattingroom_id == data.chattingroom_id) {
            for (let i=0; i< messages.length; i++) {
                $('#content').append($('<p class="talk me">').text(messages[i]));
            } 
            }
    });

    $(document).on("click",'#button', (function(){
    socket.emit('message',
        {
            chat_id: $('#chat_id').val(),
            chattingroom_id: $('#chattingroom_id').val(),
            message:$('#message').val()
        });
        $('#message').val('');
    }));

});