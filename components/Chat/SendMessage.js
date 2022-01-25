import React, { useRef, useState } from "react";
import Chat from "../../styles/Chats.module.css";
import firebase from "firebase";
import db from "./firebase";

function SendMessage() {
  const uid = 122;
  const displayName = "Anurag";
  const dummyspace = useRef();
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
    });

    setNewMessage("");

    dummyspace.current.scrollIntoView({ behavor: "smooth" });
  };

  return (
    <div>
      <section ref={dummyspace}></section>
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
