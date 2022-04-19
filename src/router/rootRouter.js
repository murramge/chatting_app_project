import express from "express";
import { getHome,postHome,getJoin,postJoin,logout} from "../controller/userController";

const rootRouter = express.Router();

rootRouter.route("/").get(getHome).post(postHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/logout", logout);

export default rootRouter;