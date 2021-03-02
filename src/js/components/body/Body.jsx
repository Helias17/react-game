import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChipSvg from './chipSvg/ChipSvg';
import StartScreen from './startScreen/StartScreen';
import Options from './options/Options';
import Records from './records/Records';
import Table from './table/Table';

const Body = (props) => {

  const tableState = { visible: false }
  let setTableState;
  [tableState.visible, setTableState] = useState(false);

  const startScreenState = { visible: true }
  let setStartScreenState;
  [startScreenState.visible, setStartScreenState] = useState(true);

  const noticeState = { visible: false };
  let setNoticeState;
  [noticeState.visible, setNoticeState] = useState(false);
  let noticeText = '';
  let setNoticeText;
  [noticeText, setNoticeText] = useState('');

  return (
    <BrowserRouter>
      <div className="app__body">
        <Table
          tableState={tableState}
          setTableState={setTableState}
          setStartScreenState={setStartScreenState}
          noticeState={noticeState}
          setNoticeState={setNoticeState}
          noticeText={noticeText}
        />
        <Route exact path="/" component={() => <StartScreen
          setTableState={setTableState}
          startScreenState={startScreenState}
          setStartScreenState={setStartScreenState}
          setNoticeState={setNoticeState}
          setNoticeText={setNoticeText}
        />} />
        <Route path="/records" component={Records} />
        <Route path="/options" component={Options} />
        <ChipSvg />
      </div >
    </BrowserRouter >
  );
}

export default Body;