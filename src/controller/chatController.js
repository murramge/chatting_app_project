
import Users from "../models/Users";
import Chat from "../models/Chat";
export const getfriendinfo = async (req,res) => {
    const {id} = req.params; //친구
    const {
        session: {
            user: {
                _id, //나
            },
        },
    } = req;

    let friend = await Users.findById(id);
    let user_id = _id;
    let friend_id = id;
    let friend_name = friend.name;
    let friend_statusmessage = friend.userstatus;
    let friend_avatarUrl = friend.avatarUrl;
    const findchat = await Chat.exists({$and:[{user:user_id},{user:friend_id}]});
    console.log(findchat);
    if (findchat) {
        return res.status(400).render("friendinfo", {pageTitle: "friendinfo",findchat,friend_name,friend_statusmessage,friend_avatarUrl});
    }
        const chat = await Chat.create({
        user:user_id
    });
    chat.user.push(friend_id);
    chat.save();
    return res.status(400).render("friendinfo", {pageTitle: "friendinfo",chat,friend_name,friend_statusmessage,friend_avatarUrl});

}

export const getchatting = async (req, res) => {

    const {id} = req.params;
    const {
        session: {
            user: {
                name,
            },
        }
    } = req;
    const chat = await Chat.find({_id:id}).populate("user");
    const username = name;
    const name1 = chat[0].user[0].name;
    const name2 = chat[0].user[1].name;
    return res.status(400).render("chatting", {pageTitle: "chatting",chat,username,name1,name2});

}


export const getchattingroom = async (req, res) => {
    const {id} = req.params;
    const chat = await Chat.find({user:id}).populate("user");
    return res.status(400).render("chat", {pageTitle: "chat",chat,id});
}