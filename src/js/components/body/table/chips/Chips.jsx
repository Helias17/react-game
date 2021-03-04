import React, { useEffect, useState } from 'react';
import Chip from './chip/Сhip';
import ChipOnBet from './chipOnBet/СhipOnBet';
import BtnDeal from './btnDeal/BtnDeal';
import options from '@js/options';
import playSound from '@js/playSound';

const Chips = (props) => {

  let [count, setCount] = useState(0);

  // sum of all players bets
  const playerBet = props.chipsOnBet.reduce((sum, bet) => sum + bet, 0)

  const makeBet = (bet) => {
    options.playerBank -= bet;
    props.setChipsOnBet([...props.chipsOnBet, bet])
    props.setBtnDealState(true);
    setCount(count + 1);
  }

  const removeBet = () => {
    playSound('chip');
    const removedBet = props.chipsOnBet.pop();
    options.playerBank += removedBet;
    console.log(options.playerBank);
    props.setChipsOnBet(props.chipsOnBet);
    setCount(count + 1);
  }

  let chipsOnBetArr = [];
  if (props.chipsOnBet.length) {
    chipsOnBetArr = props.chipsOnBet.map((item, index) => <ChipOnBet value={item} removeBet={removeBet} key={index} />)
  }

  useEffect(() => {
    const delKeyUp = (e) => {
      if (e.code === 'Delete' && options.deal === false && options.gameFinished === false && options.chipsOnBet.length > 0) {
        removeBet();
      }
    }

    document.addEventListener('keyup', delKeyUp);

    return () => document.removeEventListener('keyup', delKeyUp);
  });


  // save actual data 
  options.playerBet = playerBet;
  options.chipsOnBet = [].concat(props.chipsOnBet);
  options.save();

  return (
    <div className="table__chips">
      <p className="table__user-money">Total: ${options.playerBank}</p>
      <p className="table__bet-money">{playerBet ? '$' + playerBet : ''}</p>
      {props.chipsOnBet.length && <BtnDeal
        btnDealState={props.btnDealState}
        setBtnDealState={props.setBtnDealState}
        setNoticeState={props.setNoticeState}
        setPlayingCardsState={props.setPlayingCardsState}
      />}

      {/* chips on bet */}
      {chipsOnBetArr}

      {/* chips for making bets */}
      { options.playerBank && options.playerBank / 10 >= 1 ? <Chip value={10} makeBet={makeBet} /> : ''}
      { options.playerBank && options.playerBank / 50 >= 1 ? <Chip value={50} makeBet={makeBet} /> : ''}
      { options.playerBank && options.playerBank / 100 >= 1 ? <Chip value={100} makeBet={makeBet} /> : ''}
      { options.playerBank && options.playerBank / 500 >= 1 ? <Chip value={500} makeBet={makeBet} /> : ''}
    </div>
  );
}

export default Chips;