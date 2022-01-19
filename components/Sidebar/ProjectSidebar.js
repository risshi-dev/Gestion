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
import { useRouter } from "next/router";

export default function ProjectSidebar({
  handleCreateCard,
  openSideScreen,
  setSideScreen,
}) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);

  const setInviteModal = (isopen) => setOpenInviteModal(isopen);

  return (
    <div id="sidebar" className={dashboard.Sidebar}>
      <div className={dashboard.SidebarTop}>
        <Tooltip placement="right" title="Project Info" color="#030303">
          <InfoCircleOutlined
            id="expandIcon"
            className={icons.colorSize}
            onClick={() => {
              openSideScreen();
              setSideScreen("info");
            }}
          />
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
              onClick={() => openSideScreen()}
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
                setSideScreen("chat");
              }}
              src={<MessageOutlined className={icons.colorSize} />}
              size="large"
            />
          </Tooltip>
        </div>

        <CreateCardModal
          isOpen={openModal}
          setModal={setModal}
          handleCreateCard={handleCreateCard}
        />
        <InviteMember isOpen={openInviteModal} setModal={setInviteModal} />
      </div>
      <div className={dashboard.SidebarBottom}>
        <div>
          <Tooltip placement="right" title="Back to Projects" color="#030303">
            <LeftCircleOutlined
              onClick={() => router.push("/dashboard")}
              className={icons.colorSize}
            />{" "}
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
