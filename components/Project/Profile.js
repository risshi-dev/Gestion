import Avatar from "antd/lib/avatar/avatar";
import React,{useState} from "react";
import {storage} from '../Chat/firebase';
import Input from "../../styles/Project.module.css";
import "firebase/storage";

function Profile() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = storage.ref("image")
    updateProfile(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        <div className={Input.inputContainer}>
          <div className={Input.label}>Add Profile Photo</div>
            <input type="file" onChange={handleImageChange} className={Input.inputBox}/>
              <Avatar src={url} sx={{ width: 15, height: 15 }} />
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
