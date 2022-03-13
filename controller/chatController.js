
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
    console.log(friend_name);
    const user_name = name;
    const user_id = _id;
    const friend_id = id;
    const exists = await Chat.exists({$and:[
        {userid:user_id},{friendid:friend_id}
    ]});  
    console.log(id);
    const chat = await Chat.find({
        friend_name,
        friend_id,
    });
    console.log(chat);

    if(exists){
        let chat_id = chat.chat_id;
        console.log(chat_id);
        return res.render("chatting",{pageTitle:"chatting",friend_name,user_name,user_id,friend_id,chat_id});
    }

    else {
        function generateRandomCode(n) {
            let str = ''
            for (let i = 0; i < n; i++) {
            str += Math.floor(Math.random() * 10)
            }
            return str
        }
        
        let chat_id = generateRandomCode(6);
        console.log(chat_id);

    await Chat.create({
        userid: user_id,
        friendid: friend_id,
        username: user_name,
        friendname: friend_name,
        chat_id: chat_id,
    })
    return res.status(400).render("chatting", {pageTitle: "chatting",friend_name,user_name,user_id,friend_id,chat_id});
    }

        

}



export const postchatting = (req, res) => {


}