import React, { useState } from 'react';
import options from '@js/options';

const BtnDeal = (props) => {
  let compClassName = 'btn btn_round btn_deal';

  compClassName = props.btnDealState.visible ? compClassName : `${compClassName} btn_hidden`;

  return (
    <button className={compClassName} onClick={() => {
      props.setBtnDealState(false);
      props.setNoticeState(false);
      props.setPlayingCardsState(true);
      options.deal = true;
      options.playerCards.push(options.deck.pop());
      options.playerCards.push(options.deck.pop());
      options.dealerCards.push(options.deck.pop());
      options.dealerCards.push(options.deck.pop());
      options.save();
    }}>Deal</button>
  );
}

export default BtnDeal;