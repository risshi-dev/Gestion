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
  const router = useRouter();
  return (
    // <div id="sidebar" className={dashboard.Sidebar}>
    //   <div className={dashboard.SidebarTop}>
    //     <RightCircleOutlined
    //       id="expandIcon"
    //       className={icons.colorSize}
    //       onClick={() => handleSidebar()}
    //     />
    //   </div>
    <>
      {router.pathname.match("/projects/") ? ProjectSidebar() : UserSidebar()}
    </>
    // <div className={dashboard.SidebarBottom}>
    // <div>
    //   <LogoutOutlined className={icons.colorSize} />{" "}
    //   <span className="sidebarText">Log out</span>
    // </div>
    // </div>
    //  </div>
  );
}

export default Sidebar;
