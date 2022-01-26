import dashboard from "../../styles/Dashboard.module.css";
import icons from "../../styles/Icons.module.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiOutlinePlusCircle, AiFillMail } from "react-icons/ai";
import { Avatar, Badge, Tooltip } from "antd";
import CreateProject from "../Dashboard/CreateProject";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../stateManagement/Authorization/action";

export default function UserSidebar({
  openSideScreen,
  setSideScreen,
  screenVisible,
}) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const setModal = (isOpen) => setOpenModal(isOpen);

  const logoutHandler = () => {
    dispatch(logoutRequest());
  };
  return (
    <div
      id="sidebar"
      className={`${dashboard.Sidebar} ${dashboard.userSideBar}`}
    >
      {/* <div className={dashboard.sidebarHeader}>Gestion</div> */}

      <div
        className={dashboard.SidebarTop}
        onClick={() => {
          screenVisible(false);
          // openSideScreen();
          setSideScreen("profile");
        }}
      >
        <Tooltip placement="right" title="View Profile" color="#3bbfff">
          <FaUserAlt id="expandIcon" className={icons.colorSize} />
        </Tooltip>
        {/* <span className={icons.text}>Profile</span> */}
      </div>

      <div className={dashboard.SidebarMid}>
        {/* <div
          className="SidebarContainer"
          onClick={() => {
            screenVisible(false);
            // openSideScreen();
            setSideScreen("invites");
          }}
        >
          {/* <div> */}
        {/* <Tooltip placement="right" title="View Invites" color="#3bbfff">
            <Badge count={1} color={"#3b78f8"}>
              <Avatar
                src={<AiFillMail className={icons.colorSize} />}
                size="large"
              />{" "}
            </Badge>{" "}
          </Tooltip>{" "} */}
        {/* <span className={icons.text}>Invites</span> */}
        {/* </div> */}
        {/* </div> */}

        <div style={{ margin: "10px 0px" }} onClick={setModal}>
          <Tooltip placement="right" title="Create Project" color="#3bbfff">
            <div className={icons.button}>
              <AiOutlinePlusCircle style={{ fontSize: "30px" }} />
              {/* <span>Add a Project</span> */}
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
          </Tooltip>
        </div>
      </div>
      <div className={dashboard.SidebarBottom} onClick={() => logoutHandler()}>
        <div>
          <Tooltip placement="right" title="Logout" color="#3bbfff">
            <RiLogoutBoxRFill className={icons.colorSize} />
          </Tooltip>

          {/* <span className={icons.text}>Logout</span> */}
        </div>
      </div>
      <CreateProject isOpen={openModal} setModal={setModal} />
    </div>
  );
}
