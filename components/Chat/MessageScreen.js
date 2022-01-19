import { Divider } from "antd";
import React from "react";
import { useEffect } from "react";
import Chat from "../../styles/Chats.module.css";
import db from "./firebase";

//name
//text

//name==username Chat.self
// chat.others

function MessageScreen() {
  useEffect(() => {
    db.collection("id")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

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
