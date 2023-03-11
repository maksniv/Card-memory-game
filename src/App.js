import React, { useState, useRef } from 'react';
import Button from './components/button';
import Title from './components/title';
import Modal from './components/modal';
import CardBoard from './components/cardBoard';

let cardsInfo = [
  { id: 1, number: 1, openStatus: false, successStatus: false },
  { id: 2, number: 1, openStatus: false, successStatus: false },
  { id: 3, number: 2, openStatus: false, successStatus: false },
  { id: 4, number: 2, openStatus: false, successStatus: false },
  { id: 5, number: 3, openStatus: false, successStatus: false },
  { id: 6, number: 3, openStatus: false, successStatus: false },
  { id: 7, number: 4, openStatus: false, successStatus: false },
  { id: 8, number: 4, openStatus: false, successStatus: false },
  { id: 9, number: 5, openStatus: false, successStatus: false },
  { id: 10, number: 5, openStatus: false, successStatus: false },
  { id: 11, number: 6, openStatus: false, successStatus: false },
  { id: 12, number: 6, openStatus: false, successStatus: false },
];

function App() {
  const [cards, setCards] = useState(cardsInfo);
  const [modal, setModal] = useState(false);
  const [button, setButton] = useState(true);
  const [cardBoard, setCardBoard] = useState(false);
  const clickCardsArray = useRef({ clickCards: [] });
  const results = useRef({ score: 0, fails: 0 });
  const finishScore = 12;

  const shuffle = () => {
    let newArr = cards.sort(() => Math.random() - 0.5);
    setCards(newArr);
  };

  const startGame = () => {
    shuffle(cards);
    setCards(
      cards.map((card) => {
        return {
          ...card,
          openStatus: false,
          successStatus: false,
        };
      })
    );
    setModal(false);
    setButton(false);
    setCardBoard(true);
    results.current.score = 0;
    results.current.fails = 0;
  };

  const setCardsInGame = (card) => {
    if (clickCardsArray.current.clickCards[0] == null) {
      clickCardsArray.current.clickCards.push(card);
    } else {
      if (
        clickCardsArray.current.clickCards[1] == null &&
        clickCardsArray.current.clickCards[0].id !== card.id
      ) {
        clickCardsArray.current.clickCards.push(card);
      }
    }
  };

  const gameLogicToLose = () => {
    const [firstCard, secondCard] = clickCardsArray.current.clickCards;
    if (firstCard !== undefined && secondCard !== undefined) {
      if (firstCard.number !== secondCard.number) {
        setCards(
          cards.map((card) => {
            if (card.id === firstCard.id) {
              return {
                ...card,
                openStatus: false,
              };
            }
            if (card.id === secondCard.id) {
              return {
                ...card,
                openStatus: false,
              };
            }
            return card;
          })
        );
        results.current.fails += 2;
        clickCardsArray.current.clickCards = [];
      }
    }
  };

  const gameLogicToWin = () => {
    const [firstCard, secondCard] = clickCardsArray.current.clickCards;
    if (firstCard !== undefined && secondCard !== undefined) {
      if (firstCard.number === secondCard.number) {
        setCards(
          cards.map((card) => {
            if (card.id === firstCard.id) {
              return {
                ...card,
                openStatus: false,
                successStatus: true,
              };
            }
            if (card.id === secondCard.id) {
              return {
                ...card,
                openStatus: false,
                successStatus: true,
              };
            }
            return card;
          })
        );
        results.current.score += 2;
        clickCardsArray.current.clickCards = [];
      }
    }
  };

  const showModalWindow = () => {
    setModal(true);
  };

  const game = () => {
    gameLogicToLose();
    gameLogicToWin();
    if (results.current.score === finishScore) {
      showModalWindow();
    }
  };

  const toggleClassCard = (id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          setCardsInGame(card);
          if (card.successStatus === false) {
            return {
              ...card,
              openStatus: !card.openStatus,
            };
          }
        }
        return card;
      })
    );
    setTimeout(() => game(), 800);
  };

  return (
    <div className="game-container">
      <Title />
      {cardBoard && (
        <CardBoard toggleClassCard={toggleClassCard} cards={cards} />
      )}
      {button && <Button startGame={startGame}>Начать игру</Button>}
      <Modal
        startGame={startGame}
        modal={modal}
        setModal={setModal}
        failsCount={results.current.fails}
        successCount={results.current.score}
      />
    </div>
  );
}

export default App;
