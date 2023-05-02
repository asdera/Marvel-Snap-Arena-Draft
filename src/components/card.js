import React, { useState } from "react";
import { Particles } from "react-particles";
import { ParticleContext } from "../App";
import { useContext } from "react";
import "./card.css";

const Card = ({ card, inDeck = false, chooseCard, replaceCard }) => {
  if (inDeck) {
    return (
      <div className="card">
        <img src={card.url} alt={card.name} />
      </div>
    );
  }

  return (
    <div className="card">
      <img src={card.url} alt={card.name} onClick={() => chooseCard(card)} />
      <p className="card-ability">{card.ability}</p>
      <button className="missing-card" onClick={() => replaceCard(card)}>
        Don't Have
      </button>
    </div>
  );
};

export default Card;
