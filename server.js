import express from "express";
import rootRouter from "./router/rootRouter";
import friendRouter from "./router/friendRouter";
import chatRouter from "./router/chatRouter";
import "./db";
import "./models/Users";
import session from "express-session";
import { localsMiddleware } from "./middlewares";


const app = express();
app.set("view engine", "pug");
const handleListening = () => console.log("Server listening on port 4000")
app.listen(4000, handleListening)
app.use(express.urlencoded({ extended: true}))
app.use(session({
    secret: "Hello!",
    resave:true,
    saveUninitialized:true,
}))
app.use((req,res,next) => {
    req.sessionStore.all((error, sessions)=> {
        // console.log(sessions);
        next();
    })
})
app.use(localsMiddleware);
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/friend", friendRouter);
app.use("/chat",chatRouter);
app.use("/uploads", express.static("uploads"));
export default app;