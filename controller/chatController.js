import Users from "../models/Users";

export const getChat = async (req, res) => {
    return res.render("chat", {pageTitle: "Chat"});
}

export const postChat = async (req, res) => {
    
}

