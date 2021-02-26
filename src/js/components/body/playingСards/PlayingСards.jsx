import React from 'react';

const PlayingСards = (props) => {
  return (
    <div className="table__playingCards">
      <div className="playingCards fourColours rotateHand playingCards_player">
        <button className="btn btn_round btn_hit">Hit</button>
        <p className="playingCards__sum">12</p>
        <ul className="hand">
          <li>
            <div className="card rank-7 spades">
              <span className="rank">7</span>
              <span className="suit">&spades;</span>
            </div>
          </li>
          <li>
            <div className="card rank-k clubs">
              <span className="rank">K</span>
              <span className="suit">&clubs;</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="playingCards fourColours rotateHand playingCards_dealer">
        <button className="btn btn_round  btn_stand">Stand</button>
        <p className="playingCards__sum">21</p>
        <ul className="hand">
          <li>
            <div className="card rank-7 spades">
              <span className="rank">7</span>
              <span className="suit">&spades;</span>
            </div>
          </li>
          <li>
            <div className="card rank-k clubs">
              <span className="rank">K</span>
              <span className="suit">&clubs;</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlayingСards;