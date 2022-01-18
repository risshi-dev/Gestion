import { Avatar, Progress } from "antd";
import React, { useState } from "react";
import Cards from "../../styles/Cards.module.css";
import EditCardModal from "./EditCardModal";
function Card({ click, open }) {
  return (
    <div className={Cards.card} onClick={click}>
      <div>Title</div>
      <div className={Cards.checkboxContainer}>
        <Progress percent={75} />
      </div>
      <div className={Cards.cardFooter}>
        <div>Priority</div>
        <div style={{ textAlign: "right" }}>20/12/2021</div>
      </div>
    </div>
  );
}

export default Card;
