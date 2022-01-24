import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  UserOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  MailFilled,
  InfoCircleOutlined,
  PlusOutlined,
  PlusCircleFilled,
} from "@ant-design/icons/lib/icons";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Avatar, Badge, Tooltip } from "antd";
import CreateProject from "../Dashboard/CreateProject";
import { useState } from "react";

export default function UserSidebar({
  openSideScreen,
  setSideScreen,
  screenVisible,
}) {
  const [openModal, setOpenModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);
  return (
    <div id="sidebar" className={dashboard.Sidebar}>
      <div className={dashboard.sidebarHeader}>Gestion</div>

      <div
        className={dashboard.SidebarTop}
        onClick={() => {
          screenVisible(false);
          // openSideScreen();
          setSideScreen("profile");
        }}
      >
        {/* <Tooltip placement="right" title="View Profile" color="#030303"> */}
        <FaUserAlt id="expandIcon" className={icons.colorSize} />
        {/* </Tooltip> */} <span className={icons.text}>Profile</span>
      </div>

      <div className={dashboard.SidebarMid}>
        <div
          className="SidebarContainer"
          onClick={() => {
            screenVisible(false);
            // openSideScreen();
            setSideScreen("invites");
          }}
        >
          {/* <Tooltip placement="right" title="View Invites" color="#030303"> */}
          <Badge count={1} color={"#3b78f8"}>
            <Avatar
              src={<MailFilled className={icons.colorSize} />}
              size="large"
            />{" "}
          </Badge>{" "}
          <span className={icons.text}>Invites</span>
          {/* </Tooltip> */}
        </div>
        <div style={{ margin: "10px 0px" }} onClick={setModal}>
          {/* <Tooltip placement="right" title="Create Project" color="#030303"> */}
          <div className={icons.button}>
            {/* <PlusCircleFilled /> */}
            <span>Add a Project</span>
          </div>
          {/* <Avatar
            src={
              <PlusCircleOutlined
               
                className={icons.colorSize}
              />
            }
            size="large"
          />
          <span className={icons.text}>Add Projects</span> */}
          {/* </Tooltip> */}
        </div>
      </div>
      <div className={dashboard.SidebarBottom}>
        <div>
          {/* <Tooltip placement="right" title="Logout" color="#030303"> */}
          <RiLogoutBoxRFill
            className={icons.colorSize}
          /> {/* </Tooltip> */} <span className={icons.text}>Logout</span>
        </div>
      </div>
      <CreateProject isOpen={openModal} setModal={setModal} />
    </div>
  );
}
