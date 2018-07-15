import React from 'react'

const MessageDiv = props => {
  const {send,setMessage,back} = props
  return (
    <div>
        <div className="form-group message-text-wrapper">
            <label>Enter message here</label>
            <textarea  onChange={setMessage} className="form-control message-text-area bg-light-blue dib br3 pa3 ma2 grow dim bw2 shadow-3" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="bg-light-purple dim grow br3" onClick={send}>Send message</button>
        <button className="bg-light-purple dim grow br3" onClick={back}>Resign</button>
    </div>
  )
}



export default MessageDiv
