import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import Input from "../../styles/Project.module.css";
function Profile() {
  return (
    <div>
      <div>
        <div className={Input.inputContainer}>
          {/* <div className={Input.label}>Add Profile Photo</div>
          <input
            className={Input.inputBox}
            type="text"
            placeholder="@name here..."
          /> */}
          <Avatar />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Username</div>
          <input
            className={Input.inputBox}
            type="text"
            placeholder="@name here..."
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Github Id</div>
          <input
            className={Input.inputBox}
            type="text"
            placeholder="@git here"
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Change Password</div>
          <input className={Input.inputBox} type="text" placeholder="Here..." />
        </div>
        <div className={Input.inputContainer}>
          {/* <div className={Input.sideScreenButtons}>Cancel</div> */}
          <div className={Input.sideScreenButtons}>Update</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
