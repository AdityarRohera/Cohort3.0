// import React from 'react'

interface SingleChatType {
    text : string
}

function SingleChat({text} : SingleChatType) {
  return (
    <div className='border w-[100%] h-[30px]'>
      {text}
    </div>
  )
}

export default SingleChat
