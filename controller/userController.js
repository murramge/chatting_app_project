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
        return res.render("home", {pageTitle: "Login",  errorMessage: "An account with this password does not exists"});
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) {
        return res.render("home", {pageTitle: "Login",  errorMessage: "wrong password"});
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect(`/friend/${user._id}`);
}

export const getFriend = (req, res) => {
    return res.render("friend", {pageTitle:"Friend"});
}

export const postFriend = (req, res) => {

}