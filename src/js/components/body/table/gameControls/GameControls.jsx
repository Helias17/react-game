import React from 'react';

const GameControls = (props) => {

  return (
    <div className="table__menu">
      <button className="btn btn_small" onClick={() => {
        props.setStartScreenState(true);
        props.setTableState(false);
      }}>
        <img src="/assets/icon-pause.svg" alt="" className="btn__icon-pause" />
      </button>
      <button className="btn btn_small btn_sound btn_sound-off"></button>
    </div>
  );
}

export default GameControls;