
import Users from "../models/Users";
import Chat from "../models/Chat";

export const getchatting = async (req, res) => {
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
    if(exists){
        return res.render("chatting",{pageTitle:"chatting",friend_name,user_name});
    }
    await Chat.create({
        userid: user_id,
        friendid: friend_id,
    })

        return res.status(400).render("chatting", {pageTitle: "chatting",friend_name,user_name});

}



export const postchatting = (req, res) => {


}