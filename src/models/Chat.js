import mongoose from "mongoose";


const chatSchema = new mongoose.Schema ({
    user : [{type:mongoose.Schema.Types.ObjectId, ref:"Users"}],
    message: [String],
})


const Chat = mongoose.model('Chat',chatSchema);

export default Chat;