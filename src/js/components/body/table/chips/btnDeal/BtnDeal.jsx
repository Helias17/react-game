import React from 'react';
import options from '@js/options';
import createDeck from '@js/createDeck';
import shuffleArray from '@js/shuffleArray';

const BtnDeal = (props) => {
  let compClassName = 'btn btn_round btn_deal';

  compClassName = props.btnDealState.visible ? compClassName : `${compClassName} btn_hidden`;

  return (
    <button className={compClassName} onClick={() => {
      props.setBtnDealState(false);
      props.setNoticeState(false);
      props.setPlayingCardsState(true);
      options.deal = true;
      options.stand = false;
      if (options.deck.length < 20) {
        options.deck = shuffleArray(createDeck());
      }
      /*
            options.playerCards.push(options.deck.pop());
            options.playerCards.push(options.deck.pop());
             options.dealerCards.push(options.deck.pop());
            options.dealerCards.push(options.deck.pop());
       */
      options.playerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
      options.playerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
      options.dealerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
      options.dealerCards.push({ class: "spades", name: '10', suit: "♠", value: 10 });
      options.save();
    }}>Deal</button>
  );
}

export default BtnDeal;