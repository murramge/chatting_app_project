import express from "express";
import {getChat,postChat} from "../controller/chatController";

const chatRouter = express.Router();

chatRouter.route("/:id([0-9a-f]{24})").get(getChat).post(postChat);

export default chatRouter;