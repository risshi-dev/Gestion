import Avatar from "antd/lib/avatar/avatar";
import React, { useState, useEffect } from "react";
import { storage } from "../Chat/firebase";
import Input from "../../styles/Project.module.css";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../stateManagement/Authorization/action";
import Chat from "../../styles/Chats.module.css";

function Profile() {
  const [profile, setProfile] = useState();

  const [url, setImgUrl] = useState(null);
  const [chooseImg, setChoose] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [imgFile, setFile] = useState(null);

  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.loginReducer);
  const { username, email, profilePic, _id } = login;

  const [user, setUser] = useState({
    username,
    password: "",
  });

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    setChoose(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = imgFile;

    console.log(file);
    if (!file) {
      console.log("not found");
      return;
    }
    const storageRef = ref(storage, `files/${_id}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        message.error("Server Error");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          dispatch(updateProfile({ profilePic: downloadURL }));
          message.success("Profile Photo Updated");
        });
      }
    );

    setChoose(null);
    setFile(null);
    setImgUrl(null);
  };

  const updateHandler = () => {
    dispatch(updateProfile(user));
    message.success("Profile Updated");
  };

  useEffect(() => {
    setUser({ ...user, username, password: "" });
  }, [login]);

  const style = {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "15px",
  };

  return (
    <div>
      <div>
        <div className={Input.inputContainer}>
          {/* <div className={Input.label}>Add Profile Photo</div> */}
          {profilePic && !url && !chooseImg && (
            <img
              src={profilePic}
              style={{ borderRadius: "100%" }}
              width={130}
              height={130}
            />
          )}
          {!url && chooseImg && (
            <img src={chooseImg} width={100} height={100} />
          )}
          {url && <img src={url} width={100} height={100} />}

          <div style={style}>
            <label
              style={{ padding: "5px 10px" }}
              className={Input.sideScreenButtons}
            >
              Select Files
              <input
                type="file"
                onChange={handleImageChange}
                className={Input.inputBox}
                style={{ display: "none" }}
                accept="image/jpeg, image/jpg, image/png"
              />
            </label>
            <button
              style={{ padding: "5px 10px" }}
              onClick={handleSubmit}
              className={Chat.chatButton}
            >
              Upload
            </button>
          </div>
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Email</div>
          <input
            className={Input.inputBox}
            type="text"
            value={email}
            readOnly
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Username</div>
          <input
            className={Input.inputBox}
            type="text"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="@name here..."
            value={user.username}
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Change Password</div>
          <input
            className={Input.inputBox}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            type="password"
            placeholder="Here..."
          />
        </div>

        <div className={Input.inputContainer}>
          {/* <div className={Input.sideScreenButtons}>Cancel</div> */}
          <div
            style={{ margin: "auto auto" }}
            className={Input.sideScreenButtons}
            onClick={() => updateHandler()}
          >
            Update
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
