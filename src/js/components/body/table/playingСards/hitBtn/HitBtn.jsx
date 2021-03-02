import React from 'react';
import options from '@js/options';

const HitBtn = (props) => {

  const addCardToPlayer = () => {
    console.log(props.playingCardsState)
    options.playerCards.push(options.deck.pop());
    props.setPlayingCardsState(props.playingCardsState + 1);
  }


  return (
    <button className="btn btn_round btn_hit" onClick={addCardToPlayer}>Hit</button>
  );
}

export default HitBtn;