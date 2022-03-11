import mongoose from "mongoose";


const chatSchema = new mongoose.Schema ({
    userid: [{type:mongoose.Schema.Types.ObjectId, ref:"Users"}],
    friendid: [{type:mongoose.Schema.Types.ObjectId, ref:"Users"}],
    username: String, 
    friendname: String,
    message: String,
})


const Chat = mongoose.model('Chat',chatSchema);

export default Chat;