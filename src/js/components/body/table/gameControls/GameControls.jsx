import React from 'react';
import MuteBtn from './muteBtn/MuteBtn';


const GameControls = (props) => {

  return (
    <div className="table__menu">
      <button className="btn btn_small animate__animated animate__backInRight" onClick={() => {
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