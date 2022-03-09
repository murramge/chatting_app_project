import express from "express";
import {getchatting, postchatting} from "../controller/chatController";

const chatRouter = express.Router();

chatRouter.route("/:id([0-9a-f]{24})").get(getchatting).post(postchatting);

export default chatRouter;