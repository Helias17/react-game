import React, { useState } from 'react';
import options from '@js/options';
import Card from './card/Card';
import HitBtn from './hitBtn/HitBtn';
import StandBtn from './standBtn/StandBtn';
import Notice from './notice/Notice';


const PlayingСards = (props) => {
  console.log('Deck size:', options.deck.length);

  const startNewRound = () => {
    options.gameFinished = false;
    options.playerCards.length = 0;
    options.dealerCards.length = 0;
    options.deal = false;
    options.save();
    props.setPlayingCardsState(false); // hide playing cards
    props.setBtnDealState(true); // show deal button
    props.setNoticeState(true); // show notice to make bet
    options.autoLastBet ? props.setChipsOnBet(options.chipsOnBet) : props.setChipsOnBet([]);
    setHitStandBtnVisible(true);
  }

  // state for calling render component from buttons hit and stand
  let [playingCardsState, setPlayingCardsState] = useState(0);

  // state to show/hide hit button
  let [hitStandBtnVisible, setHitStandBtnVisible] = useState(true);

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


  const dealerCardsValues = options.dealerCards.map(cardItem => cardItem.value);
  dealerCardsValues.sort((a, b) => b - a);
  console.log('dealerCardsValues: ', dealerCardsValues);

  const dealerCardsCount = options.dealerCards.length; // for showing backside, if only 2 cards
  const dealerCardsArr = options.dealerCards.map(
    (cardItem, index) => {
      // if first 2 card, then show backside of last card ( backside={true} )
      if (dealerCardsCount === 2 && index === 1 && !options.stand) return <Card cardItem={cardItem} backside={true} key={index} />;
      // else show full card frontside
      return <Card cardItem={cardItem} key={index} />;
    }
  );

  let dealerCardsSum = 0;
  if (!options.stand) {
    dealerCardsSum = options.dealerCards[0].value;
  } else {
    dealerCardsSum = dealerCardsValues.reduce((sum, item) => {
      if (sum < 11 && item === 1) return sum + 11;
      return sum + item;
    }, 0)
  }


  // cases when dealer wins:
  // 1) check if player has a sum over 21 points
  let noticeVisible = false;
  let noticeText = '';

  const dealerWin = () => {
    noticeVisible = true;
    noticeText = 'Dealer wins!';
    options.gameFinished = true;
    if (options.autoLastBet) {
      options.playerBank = options.playerBank - options.playerBet;
    }
    if (options.playerBank === 0) {
      noticeText = 'Out of credits';
    }
    options.playerBet = 0;
    options.save;
  }

  const playerWin = () => {
    noticeVisible = true;
    noticeText = `You win $${options.playerBet}!`;
    options.gameFinished = true;
    if (options.autoLastBet) {
      options.playerBank = options.playerBank + options.playerBet;
    } else {
      options.playerBank = options.playerBank + (options.playerBet * 2);
    }
    options.playerBet = 0;
    options.save;
  }

  const nobodyWin = () => {
    noticeVisible = true;
    noticeText = 'Push';
    options.gameFinished = true;
    if (!options.autoLastBet) {
      options.playerBank = options.playerBank + options.playerBet;
    }
    options.playerBet = 0;
    options.save;
  }

  if (playerCardsSum > 21) {
    dealerWin();
  }
  // 2) check if dealer has more points than player
  else if (dealerCardsSum > playerCardsSum && dealerCardsSum < 22 && options.stand) {
    dealerWin();
  }
  // 3) check if dealer has more than 21
  else if (dealerCardsSum > 21) {
    playerWin();
  }
  // 4) check if player has more points than dealer
  else if (playerCardsSum > dealerCardsSum && options.stand) {
    playerWin();
  }
  // 5) check if player same points as dealer
  else if (playerCardsSum === dealerCardsSum && options.stand) {
    nobodyWin();
  }


  return (
    <div className="table__playingCards" onClick={() => {
      if (options.gameFinished && options.playerBank !== 0) startNewRound();

      if (options.gameFinished && options.playerBank === 0) {
        startNewRound();
        props.setStartScreenState(true);
        props.setTableState(false);
      }

    }}>
      {noticeVisible ? <Notice noticeText={noticeText} /> : ''}
      <div className="playingCards fourColours rotateHand playingCards_player">
        {noticeVisible || !hitStandBtnVisible ? '' :
          <HitBtn setPlayingCardsState={setPlayingCardsState} />
        }
        <p className="playingCards__sum">{playerCardsSum}</p>
        <ul className="hand">
          {playerCardsArr}
        </ul>
      </div>
      <div className="playingCards fourColours rotateHand playingCards_dealer">
        {noticeVisible || !hitStandBtnVisible ? '' : <StandBtn
          setHitStandBtnVisible={setHitStandBtnVisible}
          setPlayingCardsState={setPlayingCardsState}
          playerCardsSum={playerCardsSum}
        />}
        <p className="playingCards__sum">{dealerCardsSum}</p>
        <ul className="hand">
          {dealerCardsArr}
        </ul>
      </div>
    </div>
  );
}

export default PlayingСards;