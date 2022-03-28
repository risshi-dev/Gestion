import React, { useState } from "react";
import { Modal, Button } from "antd";
import Card from "../../styles/Cards.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { sendInvite } from "../../stateManagement/Invites/action";
export default function InviteMember({ isOpen, setModal }) {
  const [emails, setEmails] = useState({
    email: "",
    projectId: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    var query = router.query;
    console.log(emails);
    dispatch(sendInvite(emails));
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
            onChange={(e) =>
              setEmails({
                ...emails,
                email: e.target.value,
                projectId: router.query._id,
              })
            }
            placeholder="@email here..."
            required={true}
          />
        </div>
      </Modal>
    </>
  );
}
