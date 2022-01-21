import React from "react";
import Chat from "../Chat/Chat";
import Profile from "./Profile";
import ProjectInfo from "./ProjectInfo";
import ViewInvites from "./ViewInvites";
import ViewMembers from "./ViewMembers";

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
        <ViewInvites />
      ) : screen === "members" ? (
        <ViewMembers />
      ) : (
        <></>
      )}
    </div>
  );
}

export default SideScreen;
