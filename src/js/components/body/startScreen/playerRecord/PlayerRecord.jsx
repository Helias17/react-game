import React from 'react';
import options from '@js/options.js';

const PlayerRecord = (props) => {

  if (options.playerRecord) {
    return (
      <div className="start-screen__user-record">
        <div className="start-screen__user-record-box">
          <img src="assets/icon-dollars.png" alt="" className="start-screen__dollars" />
        Your record
        <img src="assets/icon-dollars.png" alt="" className="start-screen__dollars" />
        </div>
        <div className="start-screen__user-record-value">
          ${options.playerRecord}
        </div>
      </div>
    );
  }

  return (null);

}

export default PlayerRecord;