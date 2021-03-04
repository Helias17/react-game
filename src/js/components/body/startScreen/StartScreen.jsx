import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayerRecord from './playerRecord/PlayerRecord';
import options from '@js/options';

const StartScreen = (props) => {

  const compClassName = props.startScreenState.visible ? 'start-screen' : 'start-screen start-screen_hidden';

  return (
    <div className={compClassName}>
      <div className="start-screen__logo animate__animated animate__backInDown">
        <img src="assets/logo.png" alt="" className="logo logo_start-screen" />
      </div>
      <div className="start-screen__buttons animate__animated animate__backInUp">
        <button className="btn btn_menu" onClick={() => {
          options.deal = false;
          options.playerCards.length = 0;
          options.dealerCards.length = 0;
          if (options.playerBank === 0) options.playerBank = 2000;
          options.playerBet = 0;
          options.gameFinished = false;
          options.save();
          props.setTableState(true);
          props.setStartScreenState(false);
          props.setNoticeState(true);
          props.setNoticeText('Place your bets');
        }}>
          <img src="assets/icon-play.svg" alt="" className="btn__icon-play" />
          Play
        </button>
        <NavLink to="/options" className="btn  btn_menu">
          <img src="assets/icon-options.svg" alt="" className="btn__icon-options" />
          Options
        </NavLink>
        <NavLink to="/records" className="btn btn_menu">
          <img src="assets/icon-stats.svg" alt="" className="btn__icon-records" />
          Records
        </NavLink>
      </div>
      <PlayerRecord />
    </div>
  );
}

export default StartScreen;