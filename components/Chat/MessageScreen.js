import { Divider } from "antd";
import React from "react";
import Chat from "../../styles/Chats.module.css";

//name
//text

//name==username Chat.self
// chat.others

function MessageScreen() {
  return (
    <div className={Chat.messageScreen}>
      <div className={`${Chat.self} ${Chat.messageContainer}`}>
        <p>Rishi</p>
        <p>Hey there How</p>
      </div>
      <div className={Chat.divider}></div>
      <div className={`${Chat.others} ${Chat.messageContainer}`}>
        <p className={Chat.userName}>Rishi</p>
        <p>Hey there How</p>
      </div>
    </div>
  );
}

export default MessageScreen;
