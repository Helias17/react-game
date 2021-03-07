import React from 'react';
import options from '@js/options';
import MuteBtn from './muteBtn/MuteBtn';


const GameControls = (props) => {

  return (
    <div className="table__menu">
      <button className="btn btn_small animate__animated animate__backInRight" onClick={() => {
        options.gamePause = true;
        props.setStartScreenState(true);
        props.setTableState(false);
      }}>
        <img src="/assets/icon-pause.svg" alt="" className="btn__icon-pause" />
      </button>
      <MuteBtn />
    </div>
  );
}

export default GameControls;