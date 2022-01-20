import React from "react";
import Chat from "../Chat/Chat";
import Profile from "./Profile";
import ProjectInfo from "./ProjectInfo";

function SideScreen({ screen, screenVisible }) {
  return (
    <div className="sideScreen">
      {screen === "" ? (
        <></>
      ) : screen === "chat" ? (
        <Chat />
      ) : screen === "info" ? (
        <ProjectInfo />
      ) : screen === "profile" ? (
        <Profile />
      ) : screen === "invites" ? (
        <ProjectInfo />
      ) : (
        <></>
      )}
    </div>
  );
}

export default SideScreen;
