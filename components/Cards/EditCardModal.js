import React, { useEffect, useState } from "react";
import { Modal, Button, Progress, Checkbox } from "antd";
import Card from "../../styles/Cards.module.css";
import {
  AlignLeftOutlined,
  CheckSquareOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons/lib/icons";
import styles from "../../styles/EditCard.module.css";

// using props because of naming clash (state task and props task)
// using this function to both edit and add a new task to the todoList
const EditTaskForm = (props) => {
  const [task, setTask] = useState(props.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTodo(props.index, task);
    setTask("");
    if (props.keepOpen === true) return;
    props.toggleForm();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.cardEditTaskForm}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add an item"
        className={styles.cardInput}
      />
      <button type="submit" className={styles.cardButtonPrimary}>
        Save
      </button>
      <button
        className={styles.cardButtonPrimary}
        style={{ backgroundColor: "grey" }}
        onClick={props.toggleForm}
      >
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
        <div className={styles.cardTodoItemContainer}>
          <Checkbox checked={item.isChecked} onChange={handleCheckboxChange} />
          <div className={item.isChecked && styles.cardTaskStrike}>
            {item.task}
          </div>
          <div className={styles.cardTaskAction}>
            <EditOutlined
              className={styles.cardTaskEdit}
              onClick={toggleEditTaskForm}
            />
            <DeleteOutlined
              onClick={() => removeTodo(index)}
              className={styles.cardTaskDelete}
            />
          </div>
        </div>
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
    <div className={styles.cardTodoContainer}>
      <h3 className={styles.header}>
        <CheckSquareOutlined className={styles.headerIcon} />
        Checklist
      </h3>
      <Progress showInfo={false} percent={progressPercent} />

      {card.todo.map((item, index) => (
        <div key={index}>
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
          <button
            onClick={toggleEditTaskForm}
            className={styles.cardButtonPrimary}
            style={{ backgroundColor: "rgb(231, 231, 231)", color: "black" }}
          >
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
    setcomment("");
  };
  return (
    <>
      <div className={styles.cardCommentContainer}>
        <h3 className={styles.header}>
          <UnorderedListOutlined className={styles.headerIcon} />
          Activity
        </h3>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            placeholder="Write a comment..."
            className={styles.cardInput}
          />
          <button type="submit" className={styles.cardButtonPrimary}>
            Comment
          </button>
        </form>
        <div className={styles.cardCommentListContainer}>
          {card.comments.map((comment) => (
            <div key={comment.id} className={styles.cardComment}>
              <div className={styles.cardCommentUserDetails}>
                <img src="https://via.placeholder.com/40" />
                <div>User name</div>
              </div>
              {comment.comment}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function EditCardModal({
  isOpen,
  handleEditModalClose,
  card,
  setCard,
  setModal,
}) {
  return (
    <>
      <Modal
        visible={isOpen}
        afterClose={handleEditModalClose}
        footer={false}
        width={600}
        onCancel={() => setModal(false)}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <input
              type="text"
              className={styles.cardTitle}
              value={card?.title}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
              placeholder="Card Title..."
              required={true}
            />
          </div>
          <div className={styles.cardDescriptionContainer}>
            <h3 className={styles.header}>
              <AlignLeftOutlined className={styles.headerIcon} />
              Description
            </h3>
            <textarea
              rows="3"
              cols="50"
              value={card?.description}
              onChange={(e) =>
                setCard({ ...card, description: e.target.value })
              }
              placeholder="Add more detailed description..."
              className={styles.cardDescription}
            />
          </div>

          <TodoList card={card} setCard={setCard} />
          <CommentList card={card} setCard={setCard} />
        </div>
      </Modal>
    </>
  );
}
