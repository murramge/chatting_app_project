
$(function(){
    const socket = io.connect();
    const chatId = document.getElementById('chatId');
    const chatID=chatId.dataset.chatid;
    socket.emit('joinRoom',{
        chatID
    });
    socket.on('message',function(data){
        let messages = data.message;
                $('#content').append($('<p class="talk me">').text(messages));
                $(".chatting").scrollTop($(".chatting")[0].scrollHeight);
                })
    socket.on('preload',function(data){
        let messages = data.message;
        console.log(messages);
                $('#content').append($('<p class="talk me">').text(messages));
    });

    $(document).on("click",'#button', (function(){
        socket.emit('message',
            {
                _id: $('#_id').val(),
                message:$('#message').val(),
            });
            $('#message').val('');
        }));
});