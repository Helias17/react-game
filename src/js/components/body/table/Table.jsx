import React, { useState } from 'react';
import PlayingСards from './playingСards/PlayingСards';
import GameControls from './gameControls/GameControls';
import Chips from './chips/Chips';
import Notice from './notice/Notice';
import Hotkeys from './hotkeys/Hotkeys';

const Table = (props) => {

  let tableClass = props.tableState.visible ? 'table' : 'table table_hidden';

  let btnDealState = { visible: true };
  let setBtnDealState;
  [btnDealState.visible, setBtnDealState] = useState(true);

  let playingCardsState = { visible: false };
  let setPlayingCardsState;
  [playingCardsState.visible, setPlayingCardsState] = useState(false);

  let [chipsOnBet, setChipsOnBet] = useState([]);

  return (
    <div className={tableClass}>
      <GameControls setTableState={props.setTableState} setStartScreenState={props.setStartScreenState} />

      <Chips
        setNoticeState={props.setNoticeState}
        setPlayingCardsState={setPlayingCardsState}
        setBtnDealState={setBtnDealState}
        btnDealState={btnDealState}
        chipsOnBet={chipsOnBet}
        setChipsOnBet={setChipsOnBet}
      />

      {playingCardsState.visible && <PlayingСards setPlayingCardsState={setPlayingCardsState}
        setBtnDealState={setBtnDealState}
        setNoticeState={props.setNoticeState}
        setChipsOnBet={setChipsOnBet}
        setStartScreenState={props.setStartScreenState}
        setTableState={props.setTableState}
      />}

      <Notice noticeState={props.noticeState} noticeText={props.noticeText} />
      <Hotkeys />
    </div>
  );
}

export default Table;