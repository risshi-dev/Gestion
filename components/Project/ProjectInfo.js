import { PlusOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import Input from "../../styles/Project.module.css";
import Icons from "../../styles/Icons.module.css";
import { WriteCookie } from "../../helper/helper";
function ProjectInfo() {
  return (
    <div>
      <div>
        <div className={Input.inputContainer}>
          <div className={Input.label}>Title</div>
          <input
            className={Input.inputBox}
            type="text"
            placeholder="@name here..."
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Github Link</div>
          <input
            className={Input.inputBox}
            type="text"
            placeholder="@git here"
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Deployment Link</div>
          <input
            className={Input.inputBox}
            type="text"
            placeholder="@deployed here"
          />
        </div>

        <div className={Input.inputContainer}>
          <div className={Input.label}>Technologies Used</div>
          <div className={Input.technologies}>
            <div className={Input.technos}>React Js</div>
            <div className={Input.technos}>Mongo Db</div>
            <div className={Input.technos}>Express</div>
            <div className={Input.technos}>Mongo Db</div>
            <div className={Input.technos}>Express</div>
            {/* <div className={Input.technos}>
              <PlusOutlined className={Icons.extra} />
            </div> */}
          </div>
        </div>

        <div className={Input.inputContainer} style={{ display: "flex" }}>
          <div className={Input.sideScreenButtons}>Cancel</div>
          <div
            className={Input.sideScreenButtons}
            onClick={() => WriteCookie("now")}
          >
            Update
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
