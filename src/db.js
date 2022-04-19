import mongoose from "mongoose";
import "dotenv/config"

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log("connect to db");
db.on("error", (error) => console.log("DB error",error));
db.once("open", handleOpen);