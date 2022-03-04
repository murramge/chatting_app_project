import express from "express";
import {getFriend,postFriend,getUserEdit,postUserEdit} from "../controller/userController";

const friendRouter = express.Router();

friendRouter.route("/:id([0-9a-f]{24})").get(getFriend).post(postFriend);
friendRouter.route("/:id([0-9a-f]{24})/edit").get(getUserEdit).post(postUserEdit);

export default friendRouter;