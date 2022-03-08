
import Users from "../models/Users";

export const chatting = (rep, res) => {
    return res.status(400).render("chatting", {pageTitle: "chatting"});
}