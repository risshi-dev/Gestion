import dashboard from "../../styles/Dashboard.module.css";
import {
  ArrowRightOutlined,
  RightCircleOutlined,
  UserOutlined,
  MailOutlined,
  LoginOutlined,
  PlusCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar } from "antd";

export default function ProjectSidebar() {
  return (
    <div className={dashboard.SidebarMid}>
      <div>
        <Avatar
          src={<UserOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />}
          size="large"
        />{" "}
        <span className="sidebarText">Profile</span>
      </div>
      <div>
        <Avatar
          src={
            <UsergroupAddOutlined
              style={{ color: "#3b78f8", fontSize: "28px" }}
            />
          }
          size="large"
        />{" "}
        <span className="sidebarText">Invite Member</span>
      </div>
      <div>
        <Avatar
          src={<UserOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />}
          size="large"
        />
      </div>
      <div>
        <PlusCircleOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />{" "}
        <span className="sidebarText">Task</span>
      </div>
    </div>
  );
}
