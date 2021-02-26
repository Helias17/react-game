import React from 'react';

const PlayerRecord = (props) => {
  return (
    <div className="start-screen__user-record">
      <div className="start-screen__user-record-box">
        <img src="assets/icon-dollars.png" alt="" className="start-screen__dollars" />
      Your record
      <img src="assets/icon-dollars.png" alt="" className="start-screen__dollars" />
      </div>
      <div className="start-screen__user-record-value">
        $3550
      </div>
    </div>
  );
}

export default PlayerRecord;