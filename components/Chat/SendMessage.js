import React from "react";
import Chat from "../../styles/Chats.module.css";
function SendMessage() {
  return (
    <div>
      <input
        className={Chat.chatInput}
        type="text"
        placeholder="share your thoughts"
      />
      <button className={Chat.chatButton}>Send </button>
    </div>
  );
}

export default SendMessage;
