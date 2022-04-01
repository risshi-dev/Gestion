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

import {
  AiFillInfoCircle,
  AiFillLeftCircle,
  AiFillMessage,
} from "react-icons/ai";
import { FaUser, FaUsers } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { IoChevronBackCircleSharp } from "react-icons/io";
export default function ProjectSidebar({
  handleCreateCard,
  openSideScreen,
  setSideScreen,
  screenVisible,
}) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);

  const setInviteModal = (isopen) => setOpenInviteModal(isopen);

  return (
    <div id="sidebar" className={dashboard.Sidebar}>
      <div className={dashboard.sidebarHeader}>Gestion</div>
      <div
        className={dashboard.SidebarTop}
        onClick={() => {
          screenVisible(false);
          setSideScreen("info");
        }}
      >
        <Tooltip placement="right" title="Project Info" color="#030303">
          {" "}
          <AiFillInfoCircle id="expandIcon" className={icons.colorSize} />
          <span className={icons.text}>Project Info</span>
        </Tooltip>
      </div>
      <div className={dashboard.SidebarMid}>
        <div
          className="SidebarContainer"
          onClick={() => {
            screenVisible(false);
            setSideScreen("members");
          }}
        >
          {/* <Tooltip placement="right" title="View Members" color="#030303"> */}
          <Avatar src={<FaUsers className={icons.colorSize} />} size="large" />
          <span className={icons.text}>Team Members</span>
          {/* </Tooltip> */}
        </div>

        <div className="SidebarContainer" onClick={setInviteModal}>
          {/* <Tooltip placement="right" title="Send Invites" color="#030303"> */}
          <Avatar
            src={<MdGroupAdd className={icons.colorSize} />}
            size="large"
          />
          <span className={icons.text}>Send Invites</span>
          {/* </Tooltip> */}
        </div>

        <div
          className="SidebarContainer"
          onClick={() => {
            screenVisible(false);
            setSideScreen("chat");
          }}
        >
          {/* <Tooltip placement="right" title="Discuss Tasks" color="#030303"> */}
          <Avatar
            src={<AiFillMessage className={icons.colorSize} />}
            size="large"
          />
          <span className={icons.text}>Chat</span>
          {/* </Tooltip> */}
        </div>
        <div style={{ marginTop: "10px" }} onClick={() => setModal(true)}>
          {/* <Tooltip placement="right" title="Create Card" color="#030303"> */}
          {/* <Avatar
            src={
              <PlusCircleOutlined
                onClick={() => setModal(true)}
                className={icons.colorSize}
              />
            }
            size="large"
          />
          <span className={icons.text}>Create Card</span> */}
          {/* </Tooltip> */}
          <div className={icons.button}>
            {/* <PlusCircleFilled /> */}
            <span>Create Card</span>
          </div>
        </div>

        <CreateCardModal
          isOpen={openModal}
          setModal={setModal}
          handleCreateCard={handleCreateCard}
        />
        <InviteMember isOpen={openInviteModal} setModal={setInviteModal} />
      </div>
      <div className={dashboard.SidebarBottom}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/dashboard")}
        >
          {/* <Tooltip placement="right" title="Back to Projects" color="#030303"> */}
          <Avatar
            src={<AiFillLeftCircle className={icons.colorSize} />}
            size="large"
          />{" "}
          <span className={icons.text}>Go Back</span>
          {/* </Tooltip> */}
        </div>
      </div>
    </div>
  );
}
