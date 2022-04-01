import {
  CheckSquareOutlined,
  CommentOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Progress } from "antd";
import React, { useState } from "react";
import Cards from "../../styles/Cards.module.css";
import PriorityButton from "../Priority/PriorityButton";
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
      <div className={Cards.cardHeading}>{card.title}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <div className={Cards.cardLabel}> */}
        <PriorityButton priority={card.priority} isActive={true} />
        {/* </div> */}
        <div className={Cards.cardLabel2}>On Track</div>
      </div>

      <div>
        <div className={Cards.cardstats}>
          <div className={Cards.cardstat}>
            <CheckSquareOutlined /> <span>{countChecked()}</span>/
            <span>{card.todo.length}</span>
          </div>
          <div className={Cards.cardstat}>
            <CommentOutlined /> {card.comments.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
