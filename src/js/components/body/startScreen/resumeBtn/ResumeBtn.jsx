import React from 'react';
import options from '@js/options.js';

const ResumeBtn = (props) => {

  if (options.gamePause) {
    return (
      <button className="btn btn_menu" onClick={() => {
        console.log('Click!');
        options.gamePause = false;
        props.setStartScreenState(false);
        props.setTableState(true);
      }}>
        <img src="assets/icon-resume.svg" alt="" className="btn__icon-resume" />
        Resume
      </button>
    );
  } else {
    return null;
  }
}

export default ResumeBtn;