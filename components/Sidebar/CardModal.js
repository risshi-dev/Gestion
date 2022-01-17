import React, { useState } from "react";
import { Modal, Button } from "antd";
import Card from "../../styles/Cards.module.css";
import { DeleteOutlined } from "@ant-design/icons/lib/icons";

export default function CardModal({ isOpen, setModal }) {
  const [cardDetails, setCardDetails] = useState({
    title: "",
  });

  const handleSubmit = () => {
    console.log(cardDetails);
  };

  const [arrayofTasks, setArray] = useState([]);

  const addTask = () =>
    setArray([...arrayofTasks, { isDone: false, desc: "" }]);

  const removeTodo = (index) => {
    let arr = arrayofTasks;
    arr.splice(index, 1);
    setArray([...arr]);
  };

  const editTodo = (index, text) => {
    let arr = arrayofTasks;
    arr[index].desc = text;
    setArray([...arr]);
  };

  return (
    <>
      <Modal
        title="Add Card"
        visible={isOpen}
        onOk={() => handleSubmit()}
        okText="Create Card"
        cancelText="Discard"
        onCancel={() => setModal(false)}
        width={600}
      >
        <div className="asd">
          <input
            type="text"
            className={Card.createCardInput}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, title: e.target.value })
            }
            placeholder="Card Title..."
            required={true}
          />

          <div className={Card.createCardTodoContainer}>
            {arrayofTasks.map((item, index) => (
              <div key={index} className={Card.createCardTodo}>
                <input
                  className={Card.createCardTodoInput}
                  placeholder="@todo here..."
                  type="text"
                  onChange={(e) => editTodo(index, e.target.value)}
                  value={item.desc}
                />
                <DeleteOutlined
                  onClick={() => removeTodo(index)}
                  style={{ fontSize: "16px", marginLeft: "10px" }}
                />
              </div>
            ))}
          </div>

          <div>
            <button onClick={addTask} className={Card.addInputButton}>
              Add Task
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
