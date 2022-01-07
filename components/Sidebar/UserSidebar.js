import dashboard from "../../styles/Dashboard.module.css";
import {
  ArrowRightOutlined,
  RightCircleOutlined,
  UserOutlined,
  MailOutlined,
  LoginOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar } from "antd";

export default function UserSidebar() {
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
          src={<MailOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />}
          size="large"
        />{" "}
        <span className="sidebarText">Invites</span>
      </div>
    </div>
  );
}
