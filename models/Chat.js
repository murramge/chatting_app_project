import mongoose from "mongoose";


const chatSchema = new mongoose.Schema ({
    userid: [{type:String, ref:"Users"}],
    friendid: [{type:String, ref:"Users"}],
    username: String, 
    friendname: String,
    chat_id: String,
    message: String,
})


const Chat = mongoose.model('Chat',chatSchema);

export default Chat;