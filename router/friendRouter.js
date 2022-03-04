import express from "express";
import {getFriend,postFriend,getUserEdit,postUserEdit} from "../controller/userController";
import {uploadFiles} from "../middlewares";

const friendRouter = express.Router();

friendRouter.route("/:id([0-9a-f]{24})").get(getFriend).post(postFriend);
friendRouter.route("/:id([0-9a-f]{24})/edit").get(getUserEdit).post(uploadFiles.single("avatar"), postUserEdit);

export default friendRouter;