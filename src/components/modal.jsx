import React from 'react';
import Button from './button';

const Modal = ({ modal, setModal, failsCount, successCount, startGame }) => {
  return (
    <>
      <div
        className={`overlay ${modal ? 'active' : ''}`}
        onClick={() => setModal(false)}
      >
        <div
          className={`modal ${modal ? 'active' : ''}`}
          onClick={(event) => event.stopPropagation()}
        >
          <span className="win-text">ПОБЕДА!</span>
          <span className="info-text">Неудачных нажатий: {failsCount}</span>
          <span className="info-text">Удачных нажатий: {successCount}</span>
          <span className="info-text">
            Всего нажатий: {successCount + failsCount}
          </span>
          <Button startGame={startGame}>Начать игру</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
