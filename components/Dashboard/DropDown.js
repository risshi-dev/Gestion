import Invites from "../../styles/Project.module.css";

import dashboard from "../../styles/Dashboard.module.css";
import {
  AiFillGithub,
  AiOutlineDeploymentUnit,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptInviteUser,
  getInvites,
} from "../../stateManagement/Invites/action";

function DropDown() {
  const [drop, setDrop] = useState("down");

  const acceptInvite = {
    projectId: "",
    isAccepted: false,
    senderId: "",
  };

  const dropdownHandler = () => {
    var d = document.getElementById("dropdown");
    if (d && drop === "down") {
      d.style.display = "block";
      setDrop("up");
    } else if (d) {
      d.style.display = "none";
      setDrop("down");
    }
  };

  const dispatch = useDispatch();

  const inviteHandler = (invite, accepted) => {
    (acceptInvite.projectId = invite.projectId._id),
      (acceptInvite.senderId = invite.id._id),
      (acceptInvite.isAccepted = accepted),
      //console.log(acceptInvite);
      dispatch(acceptInviteUser(acceptInvite));
    dispatch(getInvites());
  };

  const { invites } = useSelector((state) => state.inviteReducer);

  return (
    <div className={dashboard.dropDown}>
      <div
        className={dashboard.dropDownHeader}
        onClick={() => dropdownHandler()}
      >
        <div>View Invites</div>{" "}
        {invites?.length > 0 ? (
          <div>{drop === "down" ? <AiOutlineDown /> : <AiOutlineUp />}</div>
        ) : null}
      </div>
      {invites?.length > 0 &&
        invites?.map((invite) => (
          <div id="dropdown">
            <div className={Invites.inviteContainer}>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                <div>{invite.id.username}</div>
                <div>{invite.projectId.title}</div>
              </div>
              <div className={Invites.inviteContainerButton}>
                <button
                  className={Invites.sideScreenButtons}
                  onClick={() => inviteHandler(invite, true)}
                >
                  Accept
                </button>

                <button
                  className={`${Invites.sideScreenButtons} ${Invites.cancelColor}`}
                  onClick={() => inviteHandler(invite, false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DropDown;
