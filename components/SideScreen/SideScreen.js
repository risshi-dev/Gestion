import { LeftOutlined, RightCircleOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import Chat from "../Chat/Chat";
import Profile from "./Profile";
import ProjectInfo from "./ProjectInfo";
import ViewInvites from "./ViewInvites";
import ViewMembers from "./ViewMembers";

function SideScreen({ screen, screenVisible, openSideScreen }) {
  return (
    <div className="sideScreen">
      <div>
        <RightCircleOutlined
          onClick={() => {
            screenVisible(true);
            openSideScreen();
          }}
          style={{
            fontSize: "30px",
            color: "#030303",
            marginLeft: "15px",
          }}
        />
        <div style={{ textAlign: "center" }}>
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
      </div>
    </div>
  );
}

export default SideScreen;
