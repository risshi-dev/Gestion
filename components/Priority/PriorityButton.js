import React from "react";
import styles from "../../styles/Priority.module.css";

const colors = ["#7900FF", "#FFC600", "#EA5C2B"];
const priorityLabel = ["Low", "Medium", "High"];

const getStyle = (color) => {
  return {
    backgroundColor: "white",
    borderColor: color,
    color: color,
  };
};
const getActiveStyle = (color) => {
  return {
    backgroundColor: color,
    borderColor: color,
    color: "white",
  };
};

function PriorityButton({ priority, onClick, disabled, isActive, date }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.priorityButton}
      style={
        !isActive
          ? getStyle(colors[priority])
          : getActiveStyle(colors[priority])
      }
    >
      {date ? date : priorityLabel[priority]}
    </button>
  );
}

export default PriorityButton;
