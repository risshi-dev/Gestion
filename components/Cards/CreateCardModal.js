import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";

export default function CreateCardModal(props) {
  const [cardTitle, setCardTitle] = useState("");

  return (
    <Modal
      title="Create card"
      visible={props.isOpen}
      okText="Create"
      okType="submit"
      onOk={() => {
        props.handleCreateCard(cardTitle);
        props.setModal(false);
      }}
      onCancel={() => props.setModal(false)}
    >
      <input
        type="text"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        placeholder="Card Title"
      />
    </Modal>
  );
}
