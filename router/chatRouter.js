import express from "express";
import {getchatting, getfriendinfo, getchattingroom} from "../controller/chatController";

const chatRouter = express.Router();

chatRouter.get("/:id([0-9a-f]{24})",getfriendinfo);
chatRouter.get("/:id([0-9a-f]{24})/room", getchatting);
chatRouter.get("/:id([0-9a-f]{24})/chattingroom",getchattingroom);

export default chatRouter;