import React, { useRef, useState } from "react";
import Chat from "../../styles/Chats.module.css";
import firebase from "firebase";
import db from "./firebase";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";


function SendMessage({messageScreenRef}) {
  const {login} = useSelector(state => state.loginReducer)
  const {username, _id} = login;
  
  const uid = _id;
  const displayName = username;
  const dummyspace = useRef();
  const [newMessage, setNewMessage] = useState("");
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection(router.query._id).add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
      displayName: displayName,
    });

    setNewMessage("");

    setTimeout(() => {
      messageScreenRef.current.scrollTop = messageScreenRef.current.scrollHeight;
    }, 100);

    dummyspace.current.scrollIntoView({ behavor: "smooth" });
  };

  return (
    <div>
      <section id="#last" ref={dummyspace}></section>
      <form onSubmit={handleSubmit}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={Chat.chatInput}
          type="text"
          placeholder="share your thoughts"
        />
        <button
          className={Chat.chatButton}
          type="submit"
          disabled={!newMessage}
        >
          Send{" "}
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
