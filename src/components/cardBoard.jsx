import React from 'react';
import Card from './card';

const CardBoard = ({ cards, toggleClassCard }) => {
  return (
    <div className="card-board">
      {cards.map((card) => {
        return (
          <Card
            number={card.number}
            openStatus={card.openStatus}
            successStatus={card.successStatus}
            toggleClassCard={toggleClassCard}
            id={card.id}
            key={card.id}
          />
        );
      })}
    </div>
  );
};

export default CardBoard;
