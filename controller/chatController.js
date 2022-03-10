
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
    console.log(user_id,friend_id);
    /*!!
    아직 처리하기 전 상태라서 그렇지 주석 되어있는 코드 나중에 사용해야 할 코드임
    여기에 if문으로 중복비교해주어서 userid랑 friendid가 중복되지 않으면 create해주어야함!!
    const newChat = await Chat.create({
        userid: user_id,
        friendid: friend_id
     })
     */

    return res.status(400).render("chatting", {pageTitle: "chatting",friend_name,user_name});
}
export const postchatting = (req, res) => {


}