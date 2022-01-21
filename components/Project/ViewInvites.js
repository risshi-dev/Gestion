import React from "react";
import Invites from "../../styles/Project.module.css";
function ViewInvites() {
  return (
    <>
      <div className={Invites.inviteContainer}>
        <div style={{ textAlign: "left", fontSize: "18px", fontWeight: "200" }}>
          <div>Rishi</div>
          <div>Project Name</div>
        </div>

        <button className={Invites.sideScreenButtons}>Accept</button>
      </div>
      <div className={Invites.inviteContainer}>
        <div style={{ textAlign: "left", fontSize: "18px", fontWeight: "200" }}>
          <div>Rishi</div>
          <div>Project Name</div>
        </div>

        <button className={Invites.sideScreenButtons}>Accept</button>
      </div>
    </>
  );
}

export default ViewInvites;
