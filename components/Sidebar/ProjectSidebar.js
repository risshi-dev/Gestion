import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  UserOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Tooltip } from "antd";
import CardModal from "./CardModal";
import { useState } from "react";
import InviteMember from "./InviteMember";
import EditCardModal from "../Cards/EditCardModal";

export default function ProjectSidebar() {
  const [isSideScreen, setSideScreen] = useState(false);

  const [chat, setChat] = useState(false);
  const [profile, setProfile] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);

  const setInviteModal = (isopen) => setOpenInviteModal(isopen);

  const openSideScreen = () => {
    if (!isSideScreen || chat || profile) {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "300px";
      setSideScreen(!isSideScreen);
    } else {
      const side = document.getElementsByClassName("sideScreen")[0];
      side.style.width = "0px";
      setSideScreen(!isSideScreen);
    }
  };

  return (
    <div className={dashboard.SidebarMid}>
      {/* <div>
        <Avatar
          src={<UserOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />}
          size="large"
        />{" "}
        <span className="sidebarText">Profile</span>
      </div> */}
      <div className="SidebarContainer">
        <Avatar
          src={
            <PlusCircleOutlined
              onClick={setModal}
              className={icons.colorSize}
            />
          }
          size="large"
        />
        <span className="sidebarText">Task</span>
      </div>

      <div className="SidebarContainer">
        <Tooltip placement="right" title="View Members" color="#030303">
          <Avatar
            onClick={() => {
              openSideScreen();
              setProfile(true);
            }}
            src={<UserOutlined className={icons.colorSize} />}
            size="large"
          />
        </Tooltip>
        <span className="sidebarText">View Member</span>
      </div>

      <div className="SidebarContainer">
        <Tooltip placement="right" title="View Members" color="#030303">
          <Avatar
            src={<UsergroupAddOutlined className={icons.colorSize} />}
            onClick={setInviteModal}
            size="large"
          />
        </Tooltip>
        <span className="sidebarText">Invite Member</span>
      </div>

      <div className="SidebarContainer">
        <Avatar
          onClick={() => {
            openSideScreen();
            setChat(true);
          }}
          src={<MessageOutlined className={icons.colorSize} />}
          size="large"
        />{" "}
        <span className="sidebarText">Chat</span>
      </div>

      <CardModal isOpen={openModal} setModal={setModal} />
      <InviteMember isOpen={openInviteModal} setModal={setInviteModal} />
    </div>
  );
}
