import React, { useState } from "react";
import { Modal, Button } from "antd";
import Input from "../../styles/Project.module.css";
import styles from "../../styles/CreateCard.module.css";
import { AiFillDelete } from "react-icons/ai";
export default function EditStack({ isOpen, setModal }) {
  const handleSubmit = () => {
    console.log("emails");
  };
  return (
    <>
      <Modal
        title="Tech Stack"
        visible={isOpen}
        onOk={() => handleSubmit()}
        okText="Update"
        cancelText="Discard"
        onCancel={() => setModal(false)}
        width={600}
      >
        <div>
          <div className={Input.techModal}>
            <div>React Js </div>{" "}
            <div>
              <AiFillDelete
                style={{
                  fontSize: "24px",
                  color: "#fff",
                  marginLeft: " 20px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
        <button className={styles.button}>Add Stack</button>
      </Modal>
    </>
  );
}
