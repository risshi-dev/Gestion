import {
  CheckSquareOutlined,
  CommentOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Progress } from "antd";
import React, { useState } from "react";
import Cards from "../../styles/Cards.module.css";
import EditCardModal from "./EditCardModal";
function Card({ click, open, card }) {
  const countChecked = () => {
    let count = 0;
    for (let item of card.todo) {
      if (item.isChecked) count++;
    }

    return count;
  };
  return (
    <div className={Cards.card} onClick={click}>
      <div>{card.title}</div>
      <div>
        <div>
          <div>
            <CheckSquareOutlined /> <span>{countChecked()}</span>/
            <span>{card.todo.length}</span>
          </div>
          <div>
            <CommentOutlined />
            {card.comments.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
