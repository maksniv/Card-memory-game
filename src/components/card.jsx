import React from 'react';

const Card = ({ number, openStatus, successStatus, toggleClassCard, id }) => {
  return (
    <div
      className={`card ${openStatus ? 'open' : ''}${
        successStatus ? 'success' : ''
      }`}
      onClick={() => toggleClassCard(id)}
    >
      {number}
    </div>
  );
};

export default Card;
