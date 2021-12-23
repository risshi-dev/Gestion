import React from "react";
import dashboard from "../../styles/Dashboard.module.css";
import {
  ArrowRightOutlined,
  RightCircleOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar } from "antd";
function Sidebar() {
  return (
    <div className={dashboard.Sidebar}>
      <div className={dashboard.SidebarTop}>
        <RightCircleOutlined style={{ fontSize: "28px" }} />
      </div>
      <div className={dashboard.SidebarMid}>
        <div>
          <Avatar
            src={
              <UserOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />
            }
            size="large"
          />
        </div>
        <div>
          <Avatar
            src={
              <UserOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />
            }
            size="large"
          />
        </div>
        <div>
          <Avatar
            src={
              <UserOutlined style={{ color: "#3b78f8", fontSize: "28px" }} />
            }
            size="large"
          />
        </div>
      </div>

      <div className={dashboard.SidebarBottom}>HI</div>
    </div>
  );
}

export default Sidebar;
