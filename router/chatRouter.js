import express from "express";
import {chatting} from "../controller/chatController";

const chatRouter = express.Router();

chatRouter.route("/chatting").get(chatting);

export default chatRouter;