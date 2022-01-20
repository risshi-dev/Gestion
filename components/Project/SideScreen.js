import React from "react";
import Chat from "../Chat/Chat";
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default SideScreen;
