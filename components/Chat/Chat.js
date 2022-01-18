import React from "react";
import MessageScreen from "./MessageScreen";
import SendMessage from "./SendMessage";
import ChatCss from "../../styles/Chats.module.css";
function Chat() {
  return (
    <div className={ChatCss.Container}>
      <MessageScreen />
      <SendMessage />
    </div>
  );
}

export default Chat;
