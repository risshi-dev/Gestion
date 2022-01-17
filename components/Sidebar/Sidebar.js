import React, { useState } from "react";
import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import {
  RightCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons/lib/icons";

import UserSidebar from "./UserSidebar";
import ProjectSidebar from "./ProjectSidebar";
import { useRouter } from "next/router";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSidebar = () => {
    if (!isExpanded) {
      document.getElementById("sidebar").style.width = "160px";
      document.getElementById("expandIcon").style.transition =
        "0.3s ease-in-out";
      document.getElementById("expandIcon").style.transform = "rotate(180deg)";
      for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("sidebarText")[i].style.transition =
          "0.5s ease-in-out";
        document.getElementsByClassName("sidebarText")[i].style.display =
          "initial";
      }

      setIsExpanded(true);
    } else {
      document.getElementById("sidebar").style.width = "80px";
      document.getElementById("expandIcon").style.transition =
        "0.3s ease-in-out";
      document.getElementById("expandIcon").style.transform = "rotate(360deg)";
      for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("sidebarText")[i].style.transition =
          "0.5s ease-in-out";
        document.getElementsByClassName("sidebarText")[i].style.display =
          "none";
      }

      setIsExpanded(false);
    }
  };

  const router = useRouter();
  return (
    <div id="sidebar" className={dashboard.Sidebar}>
      <div className={dashboard.SidebarTop}>
        <RightCircleOutlined
          id="expandIcon"
          className={icons.colorSize}
          onClick={() => handleSidebar()}
        />
      </div>
      {router.pathname.match("/projects/") ? ProjectSidebar() : UserSidebar()}
      <div className={dashboard.SidebarBottom}>
        <div>
          <LogoutOutlined className={icons.colorSize} />{" "}
          <span className="sidebarText">Log out</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
