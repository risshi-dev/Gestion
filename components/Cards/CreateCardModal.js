import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import Dashboard from "../../styles/Dashboard.module.css";
import PriorityButtonGroup from "../Priority/PriorityButtonGroup";
import styles from "../../styles/CreateCard.module.css";
import DatePick from "./DatePick";

export default function CreateCardModal({
  isOpen,
  handleCreateCard,
  setModal,
}) {
  const [card, setCard] = useState({
    title: "",
    description: "",
    priority: 0,
    deadline: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });

  const handleSubmit = () => {
    handleCreateCard(card);
    setModal(false);
  };

  return (
    <Modal
      title="Create card"
      visible={isOpen}
      footer={false}
      onCancel={() => setModal(false)}
    >
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="title">
          Title<span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={card.title}
          className={styles.input}
          onChange={(e) => setCard({ ...card, title: e.target.value })}
          placeholder="Card Title"
          required={true}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <br />
        <textarea
          name="description"
          id="description"
          value={card.description}
          className={styles.input}
          placeholder="Add a description ..."
          onChange={(e) => setCard({ ...card, description: e.target.value })}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="priority">
          Set Deadline
        </label>
        <br />
        <PriorityButtonGroup
          id="priority"
          selected={card.priority}
          setSelected={(selected) => setCard({ ...card, priority: selected })}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="priority">
          Set priority
        </label>
        <br />
        <DatePick setCard={setCard} card={card} />
      </div>

      <button
        className={styles.button}
        type="submit"
        onClick={() => handleSubmit()}
      >
        Create
      </button>
    </Modal>
  );
}
