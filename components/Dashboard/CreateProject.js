import React, { useState } from "react";
import "antd/dist/antd.css";
import styles from "../../styles/Cards.module.css";
import { Modal, Button, message } from "antd";
import Dashboard from "../../styles/Dashboard.module.css";
import { useDispatch } from "react-redux";
import { createProject } from "../../stateManagement/Project/action";
import { checkExtraSpaces } from "../../helper/helper";

export default function CreateProject({ isOpen, setModal }) {
  const dispatch = useDispatch();

  const [projectDetails, setProjectDetails] = useState({
    title: "",
  });

  const handleSubmit = () => {
    if (projectDetails.title === "" || checkExtraSpaces(projectDetails.title))
      message.warning("Project name can't be empty");
    else {
      dispatch(createProject(projectDetails));
      setProjectDetails("");
      setModal(false);
    }
  };
  return (
    <>
      <Modal
        title="Add Project"
        visible={isOpen}
        onOk={() => handleSubmit()}
        okText="Create Project"
        cancelText="Discard Project"
        onCancel={() => setModal(false)}
        width={600}
      >
        {/* <form className={Dashboard.CreateProject}> */}
        <input
          type="text"
          onChange={(e) =>
            setProjectDetails({ ...projectDetails, title: e.target.value })
          }
          placeholder="Project title"
          className={Dashboard.addProjectModal}
          required={true}
        />
        {/* </form> */}
      </Modal>
    </>
  );
}
