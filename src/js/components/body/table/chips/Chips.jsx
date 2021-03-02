import React, { useState } from 'react';
import Chip from './chip/Сhip';
import ChipOnBet from './chipOnBet/СhipOnBet';
import BtnDeal from './btnDeal/BtnDeal';
import options from '@js/options';

const Chips = (props) => {

  let btnDealState = { visible: true };
  let setBtnDealState;
  [btnDealState.visible, setBtnDealState] = useState(true);

  let [playerBank, setPlayerBank] = useState(options.playerBank);

  // const chipsOnBet = [];
  let [chipsOnBet, setChipsOnBet] = useState([]);

  // sum of all players bets
  const playerBet = chipsOnBet.reduce((sum, bet) => sum + bet, 0)

  const makeBet = (bet) => {
    setPlayerBank(playerBank - bet);
    setChipsOnBet([...chipsOnBet, bet])
  }

  const removeBet = () => {
    const removedBet = chipsOnBet.pop();
    setPlayerBank(playerBank + removedBet);
    setChipsOnBet(chipsOnBet);
  }

  let chipsOnBetArr = [];
  if (chipsOnBet.length) {
    chipsOnBetArr = chipsOnBet.map((item, index) => <ChipOnBet value={item} removeBet={removeBet} key={index} />)
  }

  return (
    <div className="table__chips">
      <p className="table__user-money">Total: ${playerBank}</p>
      <p className="table__bet-money">{playerBet ? '$' + playerBet : ''}</p>
      {chipsOnBet.length && <BtnDeal
        btnDealState={btnDealState}
        setBtnDealState={setBtnDealState}
        setNoticeState={props.setNoticeState}
        setPlayingCardsState={props.setPlayingCardsState}
      />}

      {/* chips on bet */}
      {chipsOnBetArr}

      {/* chips for making bets */}
      { playerBank && playerBank / 10 >= 1 ? <Chip value={10} makeBet={makeBet} /> : ''}
      { playerBank && playerBank / 50 >= 1 ? <Chip value={50} makeBet={makeBet} /> : ''}
      { playerBank && playerBank / 100 >= 1 ? <Chip value={100} makeBet={makeBet} /> : ''}
      { playerBank && playerBank / 500 >= 1 ? <Chip value={500} makeBet={makeBet} /> : ''}
    </div>
  );
}

export default Chips;