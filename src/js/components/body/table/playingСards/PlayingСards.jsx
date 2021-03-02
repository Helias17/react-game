import React, { useState } from 'react';
import createDeck from '@js/createDeck';
import shuffleArray from '@js/shuffleArray';
import options from '@js/options';
import Card from './card/Card';
import HitBtn from './hitBtn/HitBtn';

options.deck = shuffleArray(createDeck());
options.save();

console.log('Deck created!', options.deck);

const PlayingСards = (props) => {

  // state for calling render component from buttons hit and stand
  let [playingCardsState, setPlayingCardsState] = useState(0);

  const playerCardsArr = options.playerCards.map(
    (cardItem, index) => <Card cardItem={cardItem} key={index} />
  );

  const playerCardsValues = options.playerCards.map(cardItem => cardItem.value);
  playerCardsValues.sort((a, b) => b - a);
  console.log(playerCardsValues);

  const playerCardsSum = playerCardsValues.reduce((sum, item) => {
    if (sum < 11 && item === 1) return sum + 11;
    return sum + item;
  }, 0)

  const dealerCardsCount = options.dealerCards.length;
  const dealerCardsArr = options.dealerCards.map(
    (cardItem, index) => {
      // if first 2 card, then show backside of last card
      if (dealerCardsCount === 2 && index === 1) return <Card cardItem={cardItem} backside={true} key={index} />;
      return <Card cardItem={cardItem} key={index} />;
    }
  );

  return (
    <div className="table__playingCards">
      <div className="playingCards fourColours rotateHand playingCards_player">
        <HitBtn setPlayingCardsState={setPlayingCardsState} playingCardsState={playingCardsState} />
        <p className="playingCards__sum">{playerCardsSum}</p>
        <ul className="hand">
          {playerCardsArr}
        </ul>
      </div>
      <div className="playingCards fourColours rotateHand playingCards_dealer">
        <button className="btn btn_round  btn_stand">Stand</button>
        <p className="playingCards__sum">21</p>
        <ul className="hand">
          {dealerCardsArr}
        </ul>
      </div>
    </div>
  );
}

export default PlayingСards;