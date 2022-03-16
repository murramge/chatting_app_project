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
    const updatedUser = await Users.findByIdAndUpdate(_id,{ name:name, userstatus:userstatus, avatarUrl: file ? file.path : avatarUrl,}, {new: true});
    req.session.user = updatedUser;
    console.log(file);
    return res.redirect(`/friend/${_id}`);
}

export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
};

export const getFriendAdd = (req, res) => {
    return res.render("friendadd", {pageTitle: "FriendAdd"});
}
export const postFriendAdd = async (req, res) => {
    const {id} = req.params;
    const {
        body: {email},
    } = req;
    const exists = await Users.findOne(
        {email},
        )
    if (!exists) {
        return res.redirect(`/friend/${id}/add`);
    }
    const friend = exists;
    console.log(id);
    const user = await Users.findById(id);
    user.friends.push(friend);
    user.save();

}