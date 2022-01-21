import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import Dashboard from "../../styles/Dashboard.module.css";
export default function CreateCardModal({
  isOpen,
  handleCreateCard,
  setModal,
}) {
  const [cardTitle, setCardTitle] = useState("");

  return (
    <Modal
      title="Create card"
      visible={isOpen}
      okText="Create Card"
      onOk={() => {
        handleCreateCard(cardTitle);
        setModal(false);
      }}
      cancelText="Later"
      onCancel={() => setModal(false)}
    >
      <input
        type="text"
        value={cardTitle}
        className={Dashboard.addProjectModal}
        onChange={(e) => setCardTitle(e.target.value)}
        placeholder="Card Title"
      />
    </Modal>
  );
}
