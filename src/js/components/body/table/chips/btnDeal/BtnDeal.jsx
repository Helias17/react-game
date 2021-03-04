import React, { useEffect } from 'react';
import options from '@js/options';
import createDeck from '@js/createDeck';
import shuffleArray from '@js/shuffleArray';

const BtnDeal = (props) => {
  let compClassName = 'btn btn_round btn_deal animate__animated animate__bounceInLeft';

  compClassName = props.btnDealState.visible ? compClassName : `${compClassName} btn_hidden`;

  const deal = () => {
    console.log('Deal pressed!');
    props.setBtnDealState(false);
    props.setNoticeState(false);
    props.setPlayingCardsState(true);
    options.deal = true;
    options.stand = false;
    if (options.deck.length < 20) {
      options.deck = shuffleArray(createDeck());
    }

    options.playerCards.push(options.deck.pop());
    options.playerCards.push(options.deck.pop());
    options.dealerCards.push(options.deck.pop());
    options.dealerCards.push(options.deck.pop());

    /* options.playerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
    options.playerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
    options.dealerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
    options.dealerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 }); */

    options.save();
  }

  useEffect(() => {

    const dealKeyUp = (e) => {
      if (e.code === 'Enter' && options.deal === false) {
        document.querySelector('.btn_deal').click();
      }
    }

    document.addEventListener('keyup', dealKeyUp);

    return () => document.removeEventListener('keyup', dealKeyUp);

  });

  return (
    <button className={compClassName} onClick={deal}>Deal</button>
  );
}

export default BtnDeal;