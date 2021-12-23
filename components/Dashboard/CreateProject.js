import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";
import { Modal, Button } from "antd";
import Dashboard from "../../styles/Dashboard.module.css";
import { useDispatch } from "react-redux";
import { createProject } from "../../stateManagement/Project/action";

export default function CreateProject({ isOpen, setModal }) {
  const dispatch = useDispatch();

  const [projectDetails, setProjectDetails] = useState({
    titile: "",
    techStack: "",
    githubLink: "",
    deploymentLink: "",
  });

  const handleSubmit = () => {
    console.log("working");
    dispatch(createProject(projectDetails));
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
        <form className={Dashboard.CreateProject}>
          <input
            type="text"
            onChange={(e) =>
              setProjectDetails({ ...projectDetails, title: e.target.value })
            }
            placeholder="Project title"
            required="true"
          />
          <input
            type="text"
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                techStack: e.target.value,
              })
            }
            placeholder="Tech stack"
          />
          <input
            type="text"
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                githubLink: e.target.value,
              })
            }
            placeholder="Github Link"
          />
          <input
            type="text"
            onChange={(e) =>
              setProjectDetails({
                ...projectDetails,
                deploymentLink: e.target.value,
              })
            }
            placeholder="Deployment Link"
          />
        </form>
      </Modal>
    </>
  );
}
