
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
    let friend_statusmessage = friend.userstatus;
    let friend_avatarUrl = friend.avatarUrl;
    let user_name = name;
    let user_id = _id;
    let friend_id = id;

    
    const exists = await Chat.exists({$and:[
        {userid:user_id},{friendid:friend_id}
    ]});  


    let chat = await Chat.find({$and:[
        {userid:user_id},{friendid:friend_id}
    ]});

    if(exists){
        let chat = await Chat.find({$and:[
            {userid:user_id},{friendid:friend_id}
        ]});
    
        return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat,friend_statusmessage,friend_avatarUrl});
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
    let chat1 = await Chat.find({$and:[
        {userid:friend_id},{friendid:user_id}
    ]});
    // console.log(chat1);
    if(chat1[0]==null) {

        const chatusers = await Chat.create({
        userid: user_id,
        friendid: friend_id,
        username: user_name,
        friendname: friend_name,
        chatid: chatid,
        })
        // console.log(chatusers);
        chat = await Chat.find({$and:[
            {userid:user_id},{friendid:friend_id}
        ]});        
    return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat});
    }
    else if(chat1[0]==[user_id]) {
        try {
            chat = await Chat.find({$and:[
                {userid:user_id},{friendid:friend_id}
            ]});
            if(chat != chat1){
            const chat1_id = chat1[0].chatid; 
            const chat12 = await Chat.findByIdAndUpdate(chat._id,{
                chatid:chat1_id,
            })
    
            // console.log(chat12);
        
            return res.status(400).render("friendinfo", {pageTitle: "friendinfo",chat});
            }
        }
        catch {
            chat = await Chat.find({$and:[
                {userid:user_id},{friendid:friend_id}
            ]});
            // console.log("hi")
            return res.status(400).render("friendinfo", {pageTitle: "friendinfo",chat});
        }
    }
    chat = await Chat.find({$and:[
        {userid:user_id},{friendid:friend_id}
    ]});
    chat1 = chat1[0]
    console.log(chat1);

    return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat1});
}
}
export const getchatting = async (req, res) => {

    const {id} = req.params;
    const chat = await Chat.findById(id);
    const chat_id = chat._id;
    const chattingroom_id = chat.chatid;
    return res.status(400).render("chatting", {pageTitle: "chatting",chat_id,chattingroom_id});

}


export const getchattingroom = async (req, res) => {
    const {id} = req.params;
    const chat = await Chat.find({$or:[
        {userid:id},{friendid:id}
    ]});

    let sameuserFriendId;
    let differuserFriendid;
    let sameuserFriend;
    let differuserFriend;
    let list = [];
    let list2 = [];
    for(let i = 0; i <chat.length; i++){
    
    sameuserFriendId = chat[i].friendid;
    list.push(sameuserFriendId);
    sameuserFriendId = list;
    console.log(sameuserFriendId);
    differuserFriendid = chat[i].userid;
    list2.push(differuserFriendid);
    differuserFriendid = list2;
    console.log(differuserFriendid);
    }    
    sameuserFriend = await Users.find({_id:sameuserFriendId});
    differuserFriend= await Users.find({_id:differuserFriendid});
    
    return res.status(400).render("chat", {pageTitle: "chat",chat,id,sameuserFriendId,sameuserFriend,differuserFriendid,differuserFriend});
}