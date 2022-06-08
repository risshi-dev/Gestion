import {
  CheckSquareOutlined,
  CommentOutlined,
} from "@ant-design/icons/lib/icons";
import { Avatar, Progress } from "antd";
import React, { useState } from "react";
import Cards from "../../styles/Cards.module.css";
import PriorityButton from "../Priority/PriorityButton";
import EditCardModal from "./EditCardModal";
import { close_to_deadline } from "../../helper/helper";

function Card({ click, open, card, disable }) {
  const countChecked = () => {
    let count = 0;

    for (let item of card.todo) {
      if (item.isChecked) count++;
    }

    return count;
  };

  const closeTo = close_to_deadline(new Date(), new Date(card.deadline));

  const formatDate = (a) => {
    a = new Date(a);
    const dateArr = [a.getDate(), a.getMonth(), a.getFullYear()];
    return dateArr.join("/");
  };

  return (
    <div
      className={`${Cards.card} ${disable ? Cards.disableCard : ""}`}
      onClick={click}
    >
      <div className={Cards.cardHeading}>{card.title}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <div className={Cards.cardLabel}> */}
        <PriorityButton priority={card.priority} isActive={true} />
        {/* </div> */}
        <PriorityButton
          priority={closeTo > 5 ? 0 : closeTo > 1 && closeTo <= 5 ? 1 : 2}
          isActive={true}
          date={formatDate(card.deadline)}
        />
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
