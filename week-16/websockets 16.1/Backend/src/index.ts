// web sockets implementation 
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection" , (sockets) => {
    // console.log("user connected")
    
    // setInterval(() => {
    //     sockets.send("hello from server");
    // } , 5000)

    sockets.on("message" , (e) => {

        // now send message
        const message = e.toString();
        console.log(message);
        if(message === ""){
            sockets.send("You sending empty message to server")
        } else{
            sockets.send(`server received message -> ${message}`)
        }

        // if(e.toString() === "ping"){
        //     sockets.send("pong")
        // }
        // console.log(e.toString())
    })


    sockets.on('error' , console.error)
})