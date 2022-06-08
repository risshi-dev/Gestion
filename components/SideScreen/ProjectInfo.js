import { PlusOutlined } from "@ant-design/icons/lib/icons";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProject,
  getProjects,
} from "../../stateManagement/Project/action";
import Input from "../../styles/Project.module.css";
import EditStack from "./EditStack";
function ProjectInfo() {
  const [modal, setModal] = useState(false);

  const handleModal = (val) => setModal(val);

  const router = useRouter();
  const dispatch = useDispatch();

  const deleteFun = () => {
    dispatch(deleteProject({ projectId: router.query._id }));
    dispatch(getProjects());
    router.push("/dashboard");
  };
  return (
    <div>
      <div>
        <div className={Input.inputContainer}>
          <div
            className={Input.sideScreenDeleteButtons}
            onClick={() => deleteFun()}
          >
            Delete Project
          </div>
        </div>
      </div>
      <EditStack isOpen={modal} setModal={handleModal} />
    </div>
  );
}

export default ProjectInfo;
