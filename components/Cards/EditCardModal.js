import React, { useEffect, useState } from "react";
import { Modal, Button, Progress, Checkbox } from "antd";
import Card from "../../styles/Cards.module.css";
import { CloseOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";

// using props because of naming clash (state task and props task)
// using this function to both edit and add a new task to the todoList
const EditTaskForm = (props) => {
  const [task, setTask] = useState(props.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTodo(props.index, task);
    if (props.keepOpen === true) return;
    props.toggleForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add an item"
      />
      <button type="submit" className={Card.addInputButton}>
        Save
      </button>
      <button onClick={props.toggleForm}>
        <CloseOutlined />
      </button>
    </form>
  );
};

const TodoListItem = ({ item, editTodo, index, removeTodo }) => {
  const [isOpenEditTaskForm, setisOpenEditTaskForm] = useState(false);
  const toggleEditTaskForm = () => {
    setisOpenEditTaskForm(!isOpenEditTaskForm);
  };

  const handleCheckboxChange = (e) => {
    editTodo(index, item.task, e.target.checked);
  };

  return (
    <>
      {isOpenEditTaskForm ? (
        <EditTaskForm
          task={item.task}
          editTodo={editTodo}
          index={index}
          toggleForm={toggleEditTaskForm}
        />
      ) : (
        <>
          <Checkbox checked={item.isChecked} onChange={handleCheckboxChange} />
          <div onClick={toggleEditTaskForm}>{item.task}</div>
          <DeleteOutlined
            onClick={() => removeTodo(index)}
            style={{ fontSize: "16px", marginLeft: "10px" }}
          />
        </>
      )}
    </>
  );
};

const TodoList = ({ card, setCard }) => {
  const [isOpenEditTaskForm, setisOpenEditTaskForm] = useState(false);
  const [progressPercent, setprogressPercent] = useState();

  useEffect(() => {
    calculateProgressPercent();
  }, [card]);

  const toggleEditTaskForm = () => {
    setisOpenEditTaskForm(!isOpenEditTaskForm);
  };

  const removeTodo = (index) => {
    let todoList = card.todo;
    todoList.splice(index, 1);
    setCard({ ...card, todo: todoList });
    calculateProgressPercent();
  };

  const editTodo = (index, task, isChecked) => {
    let todoList = card.todo;

    if (index < todoList.length) {
      // already exists
      todoList[index].task = task;
      todoList[index].isChecked =
        isChecked === undefined ? todoList[index].isChecked : isChecked;
    } else {
      // new item to the list
      todoList.push({ task, isChecked: false });
    }
    setCard({ ...card, todo: todoList });
    calculateProgressPercent();
  };

  const countChecked = () => {
    let count = 0;
    for (let item of card.todo) {
      if (item.isChecked) count++;
    }
    return count;
  };

  // TODO: math.floor not working with setprogressPercent, showInfo is temporarily OFF.
  const calculateProgressPercent = () => {
    if (card.todo.length === 0) {
      setprogressPercent(0);
    }
    setprogressPercent((countChecked() / card.todo.length) * 100);
  };

  return (
    <div className={Card.createCardTodoContainer}>
      <h3>Checklist</h3>
      <Progress showInfo={false} percent={progressPercent} />

      {card.todo.map((item, index) => (
        <div key={index} className={Card.createCardTodo}>
          <TodoListItem
            item={item}
            index={index}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        </div>
      ))}
      <div>
        {isOpenEditTaskForm ? (
          <EditTaskForm
            task={""}
            toggleForm={toggleEditTaskForm}
            editTodo={editTodo}
            index={card.todo.length}
            keepOpen={true}
          />
        ) : (
          <button onClick={toggleEditTaskForm} className={Card.addInputButton}>
            Add Task
          </button>
        )}
      </div>
    </div>
  );
};

const CommentList = ({ card, setCard }) => {
  const [comment, setcomment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComments = card.comments;
    newComments.unshift({ id: "sample_userid", comment });
    setCard({ ...card, comments: newComments });
  };
  return (
    <>
      <div>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button type="submit" className={Card.addInputButton}>
            Comment
          </button>
        </form>

        {card.comments.map((comment) => (
          <div key={comment.id}>{comment.comment}</div>
        ))}
      </div>
    </>
  );
};

export default function EditCardModal({
  isOpen,
  handleModalClose,
  card,
  setCard,
}) {
  return (
    <>
      <Modal
        visible={isOpen}
        onOk={() => handleSubmit()}
        okText="Create Card"
        cancelText="Discard"
        onCancel={handleModalClose}
        width={600}
      >
        <div className="asd">
          <div className="cardTitle-container">
            <input
              type="text"
              className={Card.createCardInput}
              value={card?.title}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
              placeholder="Card Title..."
              required={true}
            />
          </div>
          <div className="cardDescription-container">
            <h3>Description</h3>
            <textarea
              rows="3"
              cols="50"
              value={card?.description}
              onChange={(e) =>
                setCard({ ...card, description: e.target.value })
              }
              placeholder="Add more detailed description..."
            />
          </div>

          <TodoList card={card} setCard={setCard} />
          <CommentList card={card} setCard={setCard} />
        </div>
      </Modal>
    </>
  );
}
