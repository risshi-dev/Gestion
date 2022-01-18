import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  UserOutlined,
  MailOutlined,
  PlusCircleOutlined,
  MailFilled,
} from "@ant-design/icons/lib/icons";
import { Avatar } from "antd";
import CreateProject from "../Dashboard/CreateProject";
import { useState } from "react";

export default function UserSidebar() {
  const [openModal, setOpenModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);
  return (
    <>
      <div className={dashboard.SidebarMid}>
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
          <span className="sidebarText">Project</span>
        </div>
        <div className="SidebarContainer">
          <Avatar
            src={<UserOutlined className={icons.colorSize} />}
            size="large"
          />{" "}
          <span className="sidebarText">Profile</span>
        </div>
        <div className="SidebarContainer">
          <Avatar
            src={<MailFilled className={icons.colorSize} />}
            size="large"
          />{" "}
          <span className="sidebarText">Invites</span>
        </div>
      </div>

      <CreateProject isOpen={openModal} setModal={setModal} />
    </>
  );
}
