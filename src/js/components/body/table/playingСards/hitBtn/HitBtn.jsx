import React, { useEffect } from 'react';
import options from '@js/options';

const HitBtn = (props) => {

  const addCardToPlayer = () => {
    options.playerCards.push(options.deck.pop());
    props.setPlayingCardsState(props.playingCardsState + 1);
  }

  useEffect(() => {

    const plusKeyUp = (e) => {
      if (e.code === 'NumpadAdd' && options.deal === true && options.gameFinished === false) {
        addCardToPlayer();
        console.log(e.code);
      }
    }

    document.addEventListener('keyup', plusKeyUp);

    return () => document.removeEventListener('keyup', plusKeyUp);

  });

  return (
    <button className="btn btn_round btn_hit animate__animated animate__bounceIn" onClick={addCardToPlayer}>Hit</button>
  );
}

export default HitBtn;