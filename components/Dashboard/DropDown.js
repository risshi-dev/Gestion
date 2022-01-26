import Invites from "../../styles/Project.module.css";

import dashboard from "../../styles/Dashboard.module.css";
import {
  AiFillGithub,
  AiOutlineDeploymentUnit,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { useState } from "react";

function DropDown() {
  const [drop, setDrop] = useState("down");
  const dropdownHandler = () => {
    var d = document.getElementById("dropdown");
    if (drop === "down") {
      d.style.display = "block";
      setDrop("up");
    } else {
      d.style.display = "none";
      setDrop("down");
    }
  };
  return (
    <div className={dashboard.dropDown}>
      <div
        className={dashboard.dropDownHeader}
        onClick={() => dropdownHandler()}
      >
        <div>View Invites</div>{" "}
        <div>{drop === "down" ? <AiOutlineDown /> : <AiOutlineUp />}</div>
      </div>
      <div id="dropdown">
        <div className={Invites.inviteContainer}>
          <div
            style={{
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "200",
            }}
          >
            <div>Rishi</div>
            <div>Project Name</div>
          </div>
          <div className={Invites.inviteContainerButton}>
            <button className={Invites.sideScreenButtons}>Accept</button>

            <button
              className={`${Invites.sideScreenButtons} ${Invites.cancelColor}`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
