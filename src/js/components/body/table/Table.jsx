import React, { useState } from 'react';
import PlayingСards from './playingСards/PlayingСards';
import GameControls from './gameControls/GameControls';
import Chips from './chips/Chips';
import Notice from './notice/Notice';

const Table = (props) => {

  let tableClass = props.tableState.visible ? 'table' : 'table table_hidden';

  let playingCardsState = { visible: false };
  let setPlayingCardsState;
  [playingCardsState.visible, setPlayingCardsState] = useState(false);

  return (
    <div className={tableClass}>
      <GameControls setTableState={props.setTableState} setStartScreenState={props.setStartScreenState} />

      <Chips setNoticeState={props.setNoticeState} setPlayingCardsState={setPlayingCardsState} />

      {playingCardsState.visible && <PlayingСards />}

      <Notice noticeState={props.noticeState} noticeText={props.noticeText} />
    </div>
  );
}

export default Table;