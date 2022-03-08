
$(function(){
    const socket = io.connect();
    socket.on('message',function(data){
        var output = '';
        output += '<div class="alert alert-info"><strong>';
        output += data.name;
        output += '</strong> : ';
        output += data.message;
        output += '</div>';
        $(output).prependTo('#content');
    });

    socket.on('preload',function(data){
        var output = '';
        output += '<div class="alert alert-info"><strong>';
        output += data.name;
        output += '</strong> : ';
        output += data.message;
        output += '</div>';
        $(output).prependTo('#content');
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

    
})