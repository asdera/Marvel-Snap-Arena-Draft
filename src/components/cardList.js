// CardList.js
import React from "react";
import Card from "./card";
import "./cardList.css";

const CardList = ({ cards, title }) => {
  return (
    <div>
      <h4 style={{ marginTop: 12, marginBottom: 12 }}>{title}</h4>
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className="deck-card-container">
            <Card card={card} inDeck />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
