import express from "express";
import {getFriend,postFriend} from "../controller/userController";

const friendRouter = express.Router();

friendRouter.route("/:id([0-9a-f]{24})").get(getFriend).post(postFriend);

export default friendRouter;