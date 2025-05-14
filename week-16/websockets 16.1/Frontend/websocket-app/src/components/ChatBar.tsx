// import React from 'react'

import { useEffect, useRef, useState } from "react"
import Chats from "./Chats"

function ChatBar() {

  const [socket , setSockets] = useState()
  const [serverMessage , setServerMessage] = useState('')
  const [text , setText] = useState<string[]>([]);
  const inputRef = useRef(null);

  function textHandler(e : any){
    e.preventDefault();
    if(inputRef.current === null){
      return;
    }
    const message = inputRef.current.value;
    console.log("hi")
    console.log(message);
    // now send this message to server
    if(socket){
       // @ts-ignore
      socket.send(message);
    }
  }


  // connect to server 
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSockets(ws);

    // server will send back message
    ws.onmessage = (message) => {

     const value = typeof message === "string" ? message : message.data;
     console.log(value);

      setServerMessage(value);
      // now update settext array
      // setText((prev : string[]): string[]=> {
      //   const newArray = [...prev , value];
      //   return newArray;
      // })
    }
  } ,[]);

  useEffect(() => {
        // now update settext array
      setText((prev : string[]): string[]=> {
        const newArray = [...prev , serverMessage];
        return newArray;
      })
  } , [serverMessage])


  return (
    <div className="border-1">

      <Chats text={text}/>

      <form className="flex gap-3 w-[100%] justify-between" action="">
        <input ref={inputRef} className="border-2 w-[60%]" type="text" name="message" id="message" placeholder="Enter Text to send..." />
        <button onClick={textHandler}>Send Message</button>
      </form>
    </div>
  )
}

export default ChatBar;
