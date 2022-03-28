import React, { useRef } from "react";
import MessageScreen from "./MessageScreen";
import SendMessage from "./SendMessage";
import ChatCss from "../../styles/Chats.module.css";
function Chat() {
  const messageScreenRef = useRef();
  return (
    <div className={ChatCss.Container}>
      <MessageScreen messageScreenRef={messageScreenRef}/>
      <SendMessage messageScreenRef={messageScreenRef}/>
    </div>
  );
}

export default Chat;
