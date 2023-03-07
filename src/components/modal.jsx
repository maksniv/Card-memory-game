import React from 'react';
import Button from './button';

const Modal = ({ modal, setModal, failsCount, successCount, startGame }) => {
  return (
    <>
      <div
        class={`overlay ${modal ? 'active' : ''}`}
        onClick={() => setModal(false)}
      >
        <div
          class={`modal ${modal ? 'active' : ''}`}
          onClick={(event) => event.stopPropagation()}
        >
          <span class="win-text">ПОБЕДА!</span>
          <span class="info-text">Неудачных нажатий: {failsCount}</span>
          <span class="info-text">Удачных нажатий: {successCount}</span>
          <span class="info-text">
            Всего нажатий: {successCount + failsCount}
          </span>
          <Button startGame={startGame}>Начать игру</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
