import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  UserOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar } from "antd";
import CardModal from "./CardModal";
import { useState } from "react";
import InviteMember from "./InviteMember";

export default function ProjectSidebar() {
  const [openModal, setOpenModal] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);

  const setInviteModal = (isopen) => setOpenInviteModal(isopen);
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
        <Avatar
          src={<UserOutlined className={icons.colorSize} />}
          size="large"
        />
        <span className="sidebarText">View Member</span>
      </div>

      <div className="SidebarContainer">
        <Avatar
          src={<UsergroupAddOutlined className={icons.colorSize} />}
          onClick={setInviteModal}
          size="large"
        />{" "}
        <span className="sidebarText">Invite Member</span>
      </div>

      <CardModal isOpen={openModal} setModal={setModal} />
      <InviteMember isOpen={openInviteModal} setModal={setInviteModal} />
    </div>
  );
}
