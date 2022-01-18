import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  UserOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  MailFilled,
  InfoCircleOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Tooltip } from "antd";
import CreateProject from "../Dashboard/CreateProject";
import { useState } from "react";

export default function UserSidebar() {
  const [openModal, setOpenModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);
  return (
    <div id="sidebar" className={dashboard.Sidebar}>
      <div className={dashboard.SidebarTop}>
        <Tooltip placement="right" title="View Profile" color="#030303">
          <UserOutlined id="expandIcon" className={icons.colorSize} />
        </Tooltip>
      </div>

      <div className={dashboard.SidebarMid}>
        <div className="SidebarContainer">
          <Tooltip placement="right" title="Create Project" color="#030303">
            <Avatar
              src={
                <PlusCircleOutlined
                  onClick={setModal}
                  className={icons.colorSize}
                />
              }
              size="large"
            />
          </Tooltip>
        </div>

        <div className="SidebarContainer">
          <Tooltip placement="right" title="View Invites" color="#030303">
            <Avatar
              src={<MailFilled className={icons.colorSize} />}
              size="large"
            />
          </Tooltip>
        </div>
      </div>
      <div className={dashboard.SidebarBottom}>
        <div>
          <Tooltip placement="right" title="Logout" color="#030303">
            <LogoutOutlined className={icons.colorSize} />{" "}
          </Tooltip>
        </div>
      </div>
      <CreateProject isOpen={openModal} setModal={setModal} />
    </div>
  );
}
