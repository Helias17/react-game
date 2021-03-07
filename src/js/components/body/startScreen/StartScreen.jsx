import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayerRecord from './playerRecord/PlayerRecord';
import options from '@js/options';
import playSound from '@js/playSound';
import audioBackground from '@js/audioBackground';
import ResumeBtn from './resumeBtn/ResumeBtn';

const StartScreen = (props) => {

  const compClassName = props.startScreenState.visible ? 'start-screen' : 'start-screen start-screen_hidden';

  return (
    <div className={compClassName}>
      <div className="start-screen__logo animate__animated animate__backInDown">
        <img src="assets/logo.png" alt="" className="logo logo_start-screen" />
      </div>
      <div className="start-screen__buttons animate__animated animate__backInUp">
        <button className="btn btn_menu" onClick={() => {
          playSound('click');
          if (options.music) audioBackground.play();
          options.deal = false;
          options.playerCards.length = 0;
          options.dealerCards.length = 0;
          if (options.playerBank === 0) options.playerBank = 2000;
          options.playerBet = 0;
          options.chipsOnBet.length = 0;
          options.gameFinished = false;
          options.gamePause = false;
          options.save();
          props.setTableState(true);
          props.setStartScreenState(false);
          props.setPlayingCardsState(false);
          props.setNoticeState(true);
          props.setNoticeText('Place your bets');
        }}>
          <img src="assets/icon-play.svg" alt="" className="btn__icon-play" />
          New Game
        </button>
        <ResumeBtn setStartScreenState={props.setStartScreenState} setTableState={props.setTableState} />
        <NavLink to="/options" className="btn  btn_menu" onClick={() => {
          if (options.music) audioBackground.play();
          playSound('click')
        }}>
          <img src="assets/icon-options.svg" alt="" className="btn__icon-options" />
          Options
        </NavLink>
      </div>
      <PlayerRecord />
    </div>
  );
}

export default StartScreen;