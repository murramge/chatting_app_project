import mongoose from "mongoose";


const chatSchema = new mongoose.Schema ({
    userid: [{type:String, ref:"Users"}],
    friendid: [{type:String, ref:"Users"}],
    username: String, 
    friendname: String,
    message: [String],
    chatid: String,
    useravatarUrl: String,
    friendavatarUrl: String,
})


const Chat = mongoose.model('Chat',chatSchema);

export default Chat;