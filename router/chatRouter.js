import express from "express";
import {getchatting, postchatting,getfriendinfo} from "../controller/chatController";

const chatRouter = express.Router();

chatRouter.route("/:id([0-9a-f]{24})").get(getfriendinfo);
chatRouter.route("/:id([0-9a-f]{24})/room").get(getchatting).post(postchatting);

export default chatRouter;