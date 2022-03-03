import express from "express";
import rootRouter from "./router/rootRouter";
import "./db";
import "./models/Users";
const app = express();
const handleListening = () => console.log("Server listening on port 4000")
app.listen(4000, handleListening)
app.use(express.urlencoded({ extended: true}))
app.set("view engine", "pug");
app.use("/", rootRouter);

export default app;