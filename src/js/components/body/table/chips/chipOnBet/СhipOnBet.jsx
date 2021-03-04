import React, { useEffect } from 'react';
import options from '@js/options';

const ChipOnBet = (props) => {

  const compClassName = `chip chip_${props.value} chip_bet animate__animated animate__backInUp animate__faster`;
  const svgClassName = `chip__item chip__item_${props.value}`;

  const deleteBet = () => {
    if (options.deal) {
      // if player fixed his bet by clicking deal button, we don't let to remove bet
      return false;
    }
    props.removeBet();
  }

  return (
    <div className={compClassName} onClick={deleteBet}>
      <svg className={svgClassName}>
        <use xlinkHref="#chip"></use>
      </svg>
    </div>
  );
}

export default ChipOnBet;