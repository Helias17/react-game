import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChipSvg from './chipSvg/ChipSvg';
import PlayingСards from './playingСards/PlayingСards';
import Notice from './notice/Notice';
import GameControls from './gameControls/GameControls';
import BtnDeal from './btnDeal/BtnDeal';
import Chips from './chips/Chips';
import StartScreen from './startScreen/StartScreen';
import Options from './options/Options';
import Records from './records/Records';

const Body = (props) => {
  return (
    <BrowserRouter>
      <div className="app__body">
        <div className="table table_hidden">
          <GameControls />
          <BtnDeal />
          <Chips />
          <PlayingСards />
        </div>
        <Notice />
        <Route exact path="/" component={StartScreen} />
        <Route path="/records" component={Records} />
        <Route path="/options" component={Options} />
        <ChipSvg />
      </div >
    </BrowserRouter>
  );
}

export default Body;