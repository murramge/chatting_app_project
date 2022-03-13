
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

    const friend = await Users.findById(id);
    const friend_name = friend.name;

    const user_name = name;
    const user_id = _id;
    const friend_id = id;
    const exists = await Chat.exists({$and:[
        {userid:user_id},{friendid:friend_id}
    ]});  

    const chat = await Chat.find({ friendid: [friend_id] });

    if(exists){
        return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat});
    }

    else {

    await Chat.create({
        userid: user_id,
        friendid: friend_id,
        username: user_name,
        friendname: friend_name,
    })
    const chat = await Chat.find({ friendid: [friend_id] });
    return res.status(400).render("friendinfo", {pageTitle: "friendinfo",friend_name,user_name,user_id,friend_id,chat});
    }


}
export const getchatting = async (req, res) => {
    const {id} = req.params;
    const chat = await Chat.findById(id);
    const _id = id;
    const username = chat.username;
    const friendname = chat.friendname;
    return res.status(400).render("chatting", {pageTitle: "chatting",username,friendname,_id});

}



export const postchatting = (req, res) => {


}