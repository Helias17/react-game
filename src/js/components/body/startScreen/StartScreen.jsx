import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayerRecord from './playerRecord/PlayerRecord';

const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <div className="start-screen__logo">
        <img src="assets/logo.png" alt="" className="logo logo_start-screen" />
      </div>
      <div className="start-screen__buttons">
        <button className="btn btn_menu">
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