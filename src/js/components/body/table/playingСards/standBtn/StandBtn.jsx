import React from 'react';
import options from '@js/options';

const StandBtn = (props) => {

  const dealerCardsSum = () => {
    const dealerCardsValues = options.dealerCards.map(cardItem => cardItem.value);
    dealerCardsValues.sort((a, b) => b - a);

    return dealerCardsValues.reduce((sum, item) => {
      if (sum < 11 && item === 1) return sum + 11;
      return sum + item;
    }, 0)
  }

  const addCardToDealer = () => {
    while (dealerCardsSum() <= 16 || dealerCardsSum() < props.playerCardsSum) {
      options.dealerCards.push(options.deck.pop());
    }
  }

  return (
    <button className="btn btn_round  btn_stand animate__animated animate__bounceIn animate__delay-1s" onClick={() => {
      addCardToDealer();
      props.setHitStandBtnVisible(false);
      options.stand = true;
    }}>Stand</button>
  );
}

export default StandBtn;