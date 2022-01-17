import React, { useState } from "react";
import { Modal, Button } from "antd";
import Card from "../../styles/Cards.module.css";
export default function InviteMember({ isOpen, setModal }) {
  const [emails, setEmails] = useState({
    email: "",
  });

  const handleSubmit = () => {
    console.log(emails);
  };
  return (
    <>
      <Modal
        title="Invite a Member"
        visible={isOpen}
        onOk={() => handleSubmit()}
        okText="Send Invite"
        cancelText="Later"
        onCancel={() => setModal(false)}
        width={600}
      >
        <div className="asd">
          <input
            type="text"
            className={Card.createCardInput}
            onChange={(e) => setEmails({ ...emails, email: e.target.value })}
            placeholder="@email here..."
            required={true}
          />
        </div>
      </Modal>
    </>
  );
}
