import Avatar from "antd/lib/avatar/avatar";
import React, { useState } from "react";
import { storage } from "../Chat/firebase";
import Input from "../../styles/Project.module.css";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import { message } from "antd";

function Profile() {
  const [url, setImgUrl] = useState(null);
  const [chooseImg, setChoose] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [imgFile, setFile] = useState(null);
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
    const storageRef = ref(storage, `files/${file.name}`);
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
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          message.success("Profile Photo Uploded");
        });
      }
    );
  };
  return (
    <div>
      <div>
        <div className={Input.inputContainer}>
          <div className={Input.label}>Add Profile Photo</div>
          {!url && chooseImg && (
            <img src={chooseImg} width={100} height={100} />
          )}
          {url && <img src={url} width={100} height={100} />}
          <input
            type="file"
            onChange={handleImageChange}
            className={Input.inputBox}
          />
          <button onClick={handleSubmit}>Submit</button>
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
