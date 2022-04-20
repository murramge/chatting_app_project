import Users from "../models/Users";
import bcrypt from "bcrypt";

export const getJoin = async (req, res) => {
    return res.status(400).render("join", {pageTitle: "join"});
}

export const postJoin = async (req, res) => {
    const {email, password, name} = req.body;
    await Users.create({
        email,
        password,
        name,
    });
    res.redirect("/");    
}

export const getHome = async (req, res) => {
    return res.render("home", {pageTitle: "Login"});
}
export const postHome = async (req,res) => {
    
    const {email, password} = req.body;
    const user = await Users.findOne({email});
    if(!user) {
        return res.render("home", {pageTitle: "Login",  errorMessage: "계정이 없습니다 :("});
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) {
        return res.render("home", {pageTitle: "Login",  errorMessage: "비밀번호가 틀렸습니다 다시 확인해주세요 :("});
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect(`/friend/${user._id}`);
}


export const getFriend = async (req, res) => {
    const {id} = req.params;
    const user = await Users.findById(id).populate('friends');
    const friend = user.friends
    res.render("friend", {pageTitle:"Friend", friend});  
}

export const postFriend = (req, res) => {

}
export const getUserEdit = (req, res) => {
    return res.render("useredit", {pageTitle:"UserEdit"});
}

export const postUserEdit = async (req, res) => {
    const {
        session: {
            user: {
                _id,
                avatarUrl
            },
        },
        body: { userstatus, name},
        file,
    } = req;
    const updatedUser = await Users.findByIdAndUpdate(_id,{ name:name, userstatus:userstatus, avatarUrl: file ? file.location : avatarUrl,}, {new: true});
    req.session.user = updatedUser;
    console.log(file);
    return res.redirect(`/friend/${_id}`);
}

export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
};

export const getSearch = (req, res) => {
    return res.render("search", {pageTitle: "Search"});
}
export const postSearch = async(req,res) =>{
    const {useremail} = req.body;
    const foundUser = await Users.findOne({email:useremail});
    console.log(foundUser);
    if(!foundUser){
        return res.render("search",{errorMessage:"친구를 찾을 수 없습니다 :("});
    }
    return res.render("search",{foundUser});
};
export const plusFriend = async(req,res) =>{
    const {body:friendUserName,
        session:{user},
    } = req;
    // console.log(friendUserName);
    let flag;
    const friendUser = await Users.findOne({name:friendUserName.friendUserName});
    const friend=friendUser._id;
    const currentUser = await Users.findById(user._id);
    console.log(friendUser);
    for(let num=0;num<currentUser.friends.length;num++){
        flag = currentUser.friends[num]._id.toString()===friendUser._id.toString();
        if(flag){
            return res.sendStatus(404);
        }
    } 
    currentUser.friends.push(friend);
    currentUser.save();
    req.session.user = currentUser;
    return res.sendStatus(201); 
};

export const FriendAdd = async (req, res) => {
    const {body: friendUserName,session:{user},} = req;
    let exists;
    const friendUser = await Users.findOne({username:friendUserName.friendUserName});
    const friend = friendUser._id;
    const currentuser = await Users.findById(user._id);
    for(let num=0; num<currentuser.friends.length;num++){
        exists = currentuser.friends[num]._id.toString() === friendUser._id.toString();
        if(exists) {
            return res.sendStatus(404);
        }
    }
    currentuser.friends.push(friend);
    currentuser.save();
    req.session.user = currentuser;
    return res.sendStatus(201); 
}