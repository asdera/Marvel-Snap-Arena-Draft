import React, { useState, useEffect } from "react";
import SelectCards from "./selectCards";
import CardList from "./cardList";
import "./drafter.css";

const Drafter = ({ allCards }) => {
  const [availableCards, setAvailableCards] = useState(
    allCards.filter((card) => card.status === "released")
  );
  const [currentCards, setCurrentCards] = useState([]);
  const [choosenCards, setChoosenCards] = useState([]);
  const [discardedCards, setDiscardedCards] = useState([]);
  const [replacedCards, setReplacedCards] = useState([]);

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * availableCards.length);
      cards.push(availableCards[index]);
      availableCards.splice(index, 1);
    }
    const sortedCards = cards.sort((a, b) => {
      if (a.cost === b.cost) {
        return a.power - b.power;
      }
      return a.cost - b.cost;
    });
    setCurrentCards(sortedCards);
  };

  const chooseCard = (selectedCard) => {
    // Add selected card to choosenCards
    setChoosenCards([...choosenCards, selectedCard]);

    // Add the other cards to discardedCards
    const remainingCards = currentCards.filter(
      (card) => card.name !== selectedCard.name
    );
    setDiscardedCards([...discardedCards, ...remainingCards]);

    // Generate new cards
    generateCards();
  };

  const replaceCard = (selectedCard) => {
    const remainingCards = currentCards.filter(
      (card) => card.name !== selectedCard.name
    );

    const index = Math.floor(Math.random() * availableCards.length);
    remainingCards.push(availableCards[index]);
    availableCards.splice(index, 1);

    const sortedCards = remainingCards.sort((a, b) => {
      if (a.cost === b.cost) {
        return a.power - b.power;
      }
      return a.cost - b.cost;
    });

    setCurrentCards(sortedCards);

    setReplacedCards([...replacedCards, selectedCard]);
  };

  useEffect(() => {
    if (choosenCards.length < 12) {
      generateCards();
    }
  }, [choosenCards]);

  return (
    <div className="drafter-container">
      {choosenCards.length < 12 && (
        <SelectCards
          cards={currentCards}
          chooseCard={chooseCard}
          replaceCard={replaceCard}
        />
      )}
      <div className="decklist-display">
        <CardList
          title="Your deck:"
          cards={choosenCards}
          className="choosen-deck"
        />

        <CardList
          title="Discarded cards:"
          cards={discardedCards}
          inDeck={true}
          className="discard-deck"
        />

        <CardList
          title="Cards you don't have:"
          cards={replacedCards}
          inDeck={true}
          className="replaced-deck"
        />
      </div>
    </div>
  );
};

export default Drafter;
