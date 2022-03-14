
import Users from "../models/Users";
import Chat from "../models/Chat";
export const getfriendinfo = async (req,res) => {
    const {id} = req.params;
    const {
        session: {
            user: {
                _id,
                name,
            },
        },
    } = req;

    let friend = await Users.findById(id);
    let friend_name = friend.name;

    let user_name = name;
    let user_id = _id;
    let friend_id = id;
    const exists = await Chat.exists({$and:[
        {userid:user_id},{friendid:friend_id}
    ]});  
    const exist = await Chat.exists({$and:[
        {userid:friend_id},{friendid:user_id}
    ]});

    let chat = await Chat.find({ friendid: [friend_id] });

    if(exists){
        return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat});
    }
    else {
    function generateRandomCode(n) {
        let str = ''
        for (let i = 0; i < n; i++) {
        str += Math.floor(Math.random() * 10)
        }
        return str
    }
    let chatid = generateRandomCode(6);
    let chat1 = await Chat.find({ friendid: [user_id]});
    console.log(chat1);
    if(chat1[0]==null) {
        chat = await Chat.find({ friendid: [friend_id] });
        const chatusers = await Chat.create({
        userid: user_id,
        friendid: friend_id,
        username: user_name,
        friendname: friend_name,
        chatid: chatid,
        })
        console.log(chatusers);
        
    return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat});
    }
    else if(chat1[0]==[user_id]) {
        try {
            chat = await Chat.find({ friendid: [friend_id] });
            if(chat != chat1){
            const chat1_id = chat1[0].chatid; 
            const chat12 = await Chat.findByIdAndUpdate(chat._id,{
                chatid:chat1_id,
            })
    
            console.log(chat12);
        
            return res.status(400).render("friendinfo", {pageTitle: "friendinfo",chat});
            }
        }
        catch {
            chat = await Chat.find({ friendid: [friend_id] });
            console.log("hi")
            return res.status(400).render("friendinfo", {pageTitle: "friendinfo",chat});
        }
    }
    const chatUser = await Chat.findOne({friend_id});


    return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chatUser});
}
}
export const getchatting = async (req, res) => {

    const {id} = req.params;
    const chat = await Chat.findById(id);
    const chat_id = chat._id;
    const chattingroom_id = chat.chatid;
    return res.status(400).render("chatting", {pageTitle: "chatting",chat_id,chattingroom_id});

}



export const postchatting = (req, res) => {


}

