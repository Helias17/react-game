import React from 'react';

const Chips = (props) => {
  return (
    <div className="table__chips">
      <p className="table__user-money">Total: $<span id="user-money">2000</span></p>
      <p className="table__bet-money">$<span id="bet-money">250</span></p>
      <div className="chip chip_50 chip_bet">
        <svg className="chip__item chip__item_50">
          <use xlinkHref="#chip"></use>
        </svg>
      </div>
      <div className="chip chip_10">
        <svg className="chip__item chip__item_10">
          <use xlinkHref="#chip"></use>
        </svg>
      </div>
      <div className="chip chip_50">
        <svg className="chip__item chip__item_50">
          <use xlinkHref="#chip"></use>
        </svg>
      </div>
      <div className="chip chip_100">
        <svg className="chip__item chip__item_100">
          <use xlinkHref="#chip"></use>
        </svg>
      </div>
      <div className="chip chip_500">
        <svg className="chip__item chip__item_500">
          <use xlinkHref="#chip"></use>
        </svg>
      </div>
    </div>
  );
}

export default Chips;