import React from "react";
import { useEffect, useState } from "react";
import { formatRelative } from "date-fns";
import Chat from "../../styles/Chats.module.css";
import db from "./firebase";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function MessageScreen({ messageScreenRef }) {
  const { login } = useSelector((state) => state.loginReducer);
  const { username, _id } = login;
  const router = useRouter();
  const uid = _id;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection(router.query._id)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    console.log(messages);
  }, []);

  return (
    <div className={Chat.messageScreen} ref={messageScreenRef}>
      {messages.map(
        (message) => (
          <div key={message.uid}>
            <div
              className={
                message.uid === uid
                  ? `${Chat.self} ${Chat.messageContainer}`
                  : `${Chat.others} ${Chat.messageContainer}`
              }
            >
              <p className={Chat.userName}>{message.displayName}</p>
              <p>{message.text}</p>
            </div>
            <div className={Chat.divider}></div>
          </div>
        )
        // <div className={`${Chat.others} ${Chat.messageContainer}`}>
        //   <p className={Chat.userName}>{message.displayName}</p>
        //   <p>{message.text}</p>
        // </div>
        // {
        //   message.createdAt?.seconds ? (
        //     <span>
        //       {formatRelative(
        //         new Date(message.createdAt.seconds * 1000),
        //         new Date()
        //       )}
        //     </span>
        //   ) : null;
        // }
      )}
    </div>
  );
}

export default MessageScreen;
