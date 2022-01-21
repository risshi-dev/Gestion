import React from "react";
import { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import Chat from "../../styles/Chats.module.css";
import db from "./firebase";

function MessageScreen() {
  const uid = 123;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(db.collection("messages"));

    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className={Chat.messageScreen}>
      {messages.map((message) => {
        <div
          className={
            message.uid === uid
              ? `${Chat.self} ${Chat.messageContainer}`
              : `${Chat.others} ${Chat.messageContainer}`
          }
        >
          <p className={Chat.userName}>{message.displayName}</p>
          <p>{message.text}</p>
        </div>;
        // <div className={`${Chat.others} ${Chat.messageContainer}`}>
        //   <p className={Chat.userName}>{message.displayName}</p>
        //   <p>{message.text}</p>
        // </div>
        {
          message.createdAt?.seconds ? (
            <span>
              {formatRelative(
                new Date(message.createdAt.seconds * 1000),
                new Date()
              )}
            </span>
          ) : null;
        }
      })}
      <div className={Chat.divider}></div>
    </div>
  );
}

export default MessageScreen;
