// import React from 'react'

import SingleChat from "./SingleChat"

interface chatsType {
    text : string[]
}

function Chats({text} : chatsType ) {

  return (
    <div className="border bg-gray-600 w-[400px] h-[400px] flex flex-col gap-5 items-center p-5">

        {text.map(txt => (
            <SingleChat text={txt} />
        ))}
    </div>
  )
}

export default Chats
