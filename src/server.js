import express from "express";
import rootRouter from "./router/rootRouter";
import friendRouter from "./router/friendRouter";
import chatRouter from "./router/chatRouter";
import apiRouter from "./router/apiRouter";
import "./db";
import "./models/Users";
import session from "express-session";
import { localsMiddleware } from "./middlewares";
import http from "http";
import connect from "connect";
import socketio from "socket.io"
import Chat from "./models/Chat"
import "dotenv/config"
import "regenerator-runtime";


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
const handleListening = () => console.log(`Server listening on port ${PORT}`);
server.listen(PORT, handleListening);
app.set("views" , process.cwd() + "/src/views")
const io = socketio(server);

//socket 부분입니당
io.sockets.on('connection', function(socket){
    // db로부터 데이터 가져오기 입니당. 가져온 데이터는 result에 포함되고, 전체 아이템 수를 반복하여 각 아이템에 대해
    // name과 message로 분류하여 dbdate에 저장 후 socket.io 모듈 메서드를 통해 html로 데이터를 전달합니당
    // 이 때 emit 는 preload , dbData로 사용했는데 이것은 html 메서드와 짝이 되어 html 측에 db data를 전달합니다!!
    //let i=result.length i>0; i--
    
    console.log('connect');
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });
    socket.on('joinRoom',async function(data){
        const findRoom = await Chat.findById(data.chatID);
        for(let i=0; i<findRoom.message.length;i++){
           const msg = {message:findRoom.message[i], _id:findRoom._id};
           io.to(socket.id).emit('preload',msg);
           
        }
    })

    //이부분은 html측에서 메시지 이벤트 발생 시 채팅정보 (username/message)를 다른 사용자에게 전달하여 각 사용자의 html 페이지에 렌더링(emit)합니당.
    //현재DB의 콜렉션 모델에 추가(new chat)후 저장(save)한다. 만약 저장 시 에러가 발생하면 error가 출력된다.
    socket.on('message', async function(data) {
        io.sockets.emit('message', data);
        console.log("data:",data);
        const chat = await Chat.findOne({_id:data._id});
        console.log(chat);
        const messages = data.message;
        chat.message.push(messages);
        chat.save(function (err, data){
            if (err) {
                console.log(err);
            }
            console.log('message is inserted');
            console.log(chat);
        })
    })
})


app.use(express.urlencoded({ extended: true}))
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave:true,
    saveUninitialized:true,
}))
app.use((req,res,next) => {
    req.sessionStore.all((error, sessions)=> {
    
        next();
    })
})


app.set("view engine", "pug");
app.use(localsMiddleware);
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/friend", friendRouter);
app.use("/chat",chatRouter);
app.use(express.json());
app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
  });
app.use("/uploads", express.static("uploads"));
app.use("/api",apiRouter);

export default app;

