import express from "express";
import { getHome,postHome,getJoin,postJoin} from "../controller/userController";

const rootRouter = express.Router();

rootRouter.route("/").get(getHome).post(postHome);
rootRouter.route("/join").get(getJoin).post(postJoin);

export default rootRouter;