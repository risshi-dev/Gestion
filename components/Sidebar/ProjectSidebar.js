import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  UserOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Tooltip } from "antd";
import CardModal from "./CardModal";
import { useState } from "react";
import InviteMember from "./InviteMember";
import CreateCardModal from "../Cards/CreateCardModal";

export default function ProjectSidebar(props) {
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
    <div id="sidebar" className={dashboard.Sidebar}>
      <div className={dashboard.SidebarTop}>
        <Tooltip placement="right" title="Project Info" color="#030303">
          <InfoCircleOutlined id="expandIcon" className={icons.colorSize} />
        </Tooltip>
      </div>
      <div className={dashboard.SidebarMid}>
        <div className="SidebarContainer">
          <Tooltip placement="right" title="Add Task" color="#030303">
            <Avatar
              src={
                <PlusCircleOutlined
                  onClick={() => setModal(true)}
                  className={icons.colorSize}
                />
              }
              size="large"
            />
          </Tooltip>
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
        </div>

        <div className="SidebarContainer">
          <Tooltip placement="right" title="Send Invites" color="#030303">
            <Avatar
              src={<UsergroupAddOutlined className={icons.colorSize} />}
              onClick={setInviteModal}
              size="large"
            />
          </Tooltip>
        </div>

        <div className="SidebarContainer">
          <Tooltip placement="right" title="Discuss Tasks" color="#030303">
            <Avatar
              onClick={() => {
                openSideScreen();
                setChat(true);
              }}
              src={<MessageOutlined className={icons.colorSize} />}
              size="large"
            />
          </Tooltip>
        </div>

        <CreateCardModal
          isOpen={openModal}
          setModal={setModal}
          handleCreateCard={props.handleCreateCard}
        />
        <InviteMember isOpen={openInviteModal} setModal={setInviteModal} />
      </div>
      <div className={dashboard.SidebarBottom}>
        <div>
          <Tooltip placement="right" title="Back to Projects" color="#030303">
            <LeftCircleOutlined className={icons.colorSize} />{" "}
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
