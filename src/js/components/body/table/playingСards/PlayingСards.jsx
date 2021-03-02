import React, { useState } from 'react';
import createDeck from '@js/createDeck';
import shuffleArray from '@js/shuffleArray';
import options from '@js/options';
import Card from './card/Card';
import HitBtn from './hitBtn/HitBtn';
import Notice from './notice/Notice';

options.deck = shuffleArray(createDeck());
options.save();

console.log('Deck created!', options.deck);

const startNewRound = () => {
  alert('Start new round!');
}

const PlayingСards = (props) => {

  // state for calling render component from buttons hit and stand
  let [playingCardsState, setPlayingCardsState] = useState(0);

  const playerCardsArr = options.playerCards.map(
    (cardItem, index) => <Card cardItem={cardItem} key={index} />
  );

  const playerCardsValues = options.playerCards.map(cardItem => cardItem.value);
  playerCardsValues.sort((a, b) => b - a);
  console.log('playerCardsValues: ', playerCardsValues);

  const playerCardsSum = playerCardsValues.reduce((sum, item) => {
    if (sum < 11 && item === 1) return sum + 11;
    return sum + item;
  }, 0)

  // check if player has a sum over 21 points
  let noticeVisible = false;
  let noticeText = '';
  if (playerCardsSum > 21) {
    noticeVisible = true;
    noticeText = 'Dealer has won!';
    options.gameFinished = true;
  }


  const dealerCardsValues = options.dealerCards.map(cardItem => cardItem.value);
  dealerCardsValues.sort((a, b) => b - a);
  console.log('dealerCardsValues: ', dealerCardsValues);

  const dealerCardsCount = options.dealerCards.length; // for showing backside, if only 2 cards
  const dealerCardsArr = options.dealerCards.map(
    (cardItem, index) => {
      // if first 2 card, then show backside of last card ( backside={true} )
      if (dealerCardsCount === 2 && index === 1) return <Card cardItem={cardItem} backside={true} key={index} />;
      // else show full card frontside
      return <Card cardItem={cardItem} key={index} />;
    }
  );

  let dealerCardsSum = 0;
  if (dealerCardsCount === 2) {
    dealerCardsSum = options.dealerCards[0].value;
  } else {
    dealerCardsSum = dealerCardsValues.reduce((sum, item) => {
      if (sum < 11 && item === 1) return sum + 11;
      return sum + item;
    }, 0)
  }


  return (
    <div className="table__playingCards" onClick={() => {
      if (options.gameFinished) startNewRound();
    }}>
      {noticeVisible ? <Notice noticeText={noticeText} /> : ''}
      <div className="playingCards fourColours rotateHand playingCards_player">
        {noticeVisible ? '' :
          <HitBtn setPlayingCardsState={setPlayingCardsState} playingCardsState={playingCardsState} />
        }
        <p className="playingCards__sum">{playerCardsSum}</p>
        <ul className="hand">
          {playerCardsArr}
        </ul>
      </div>
      <div className="playingCards fourColours rotateHand playingCards_dealer">
        {noticeVisible ? '' : <button className="btn btn_round  btn_stand">Stand</button>}
        <p className="playingCards__sum">{dealerCardsSum}</p>
        <ul className="hand">
          {dealerCardsArr}
        </ul>
      </div>
    </div>
  );
}

export default PlayingСards;