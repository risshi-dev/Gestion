import React from "react";
import Cards from "../../styles/Cards.module.css";
function Card() {
  return (
    <div className={Cards.card}>
      <div>Title</div>
      <div className={Cards.cardFooter}>
        <div>Priority</div>
        <div style={{ textAlign: "right" }}>20/12/2021</div>
      </div>
    </div>
  );
}

export default Card;
