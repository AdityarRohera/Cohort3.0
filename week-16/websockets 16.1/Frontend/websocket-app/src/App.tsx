// import { useEffect, useRef, useState } from 'react'
// import WebSocket from 'ws';
import './App.css'


// this is practice for websockets
// function App() {
//   const [sockets, setSockets] = useState();
//   const inputRef = useRef(null)


//   function submitHandler(){
//     console.log("button clicked")

//     if(sockets){

//       if(inputRef.current === null){
//         return;
//       }

//       const gedtValue = inputRef.current.value;
//       // @ts-ignore
//       sockets.send(gedtValue);
//     }

//   }

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:8080');
//     setSockets(ws); 

//     ws.onmessage = (message) => {
//       alert(message.data);
//     }

//   } ,[])

//   return (
//     <div>
//       hello
//       <input ref = {inputRef} type="text" placeholder='Enter the text' />
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   )
// }

// export default App

// create my chat Application

import ChatBar from './components/ChatBar';

function App () {

  return(
    <div>
      <ChatBar/>
    </div>
  )
}

export default App;
