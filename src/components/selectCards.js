import React, { useState } from "react";
import Card from "./card";
import { Particles } from "react-particles";
import "./selectCards.css";

const SelectCards = ({ cards, chooseCard, replaceCard }) => {
  return (
    <div className="select-cards">
      {cards.map((card, index) => (
        <div key={index} className="select-card-container">
          <Card card={card} chooseCard={chooseCard} replaceCard={replaceCard} />
        </div>
      ))}
    </div>
  );
};

export default SelectCards;
