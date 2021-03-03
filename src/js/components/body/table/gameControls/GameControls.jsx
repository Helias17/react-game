import React from 'react';

const GameControls = (props) => {

  return (
    <div className="table__menu">
      <button className="btn btn_small animate__animated animate__backInRight" onClick={() => {
        props.setStartScreenState(true);
        props.setTableState(false);
      }}>
        <img src="/assets/icon-pause.svg" alt="" className="btn__icon-pause" />
      </button>
      <button className="btn btn_small btn_sound btn_sound-off animate__animated animate__backInRight"></button>
    </div>
  );
}

export default GameControls;