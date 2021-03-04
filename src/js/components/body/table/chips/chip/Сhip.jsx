import React, { useEffect } from 'react';
import options from '@js/options';
import playSound from '@js/playSound';

const Chip = (props) => {

  const compClassName = `chip chip_${props.value}`;
  const svgClassName = `chip__item chip__item_${props.value}`;

  const addBet = () => {
    if (options.deal) {
      // if player fixed his bet by clicking deal button, we don't let to make new bet
      return false;
    }
    playSound('chip');
    props.makeBet(props.value);
  }

  const digits = {
    10: 'Digit1',
    50: 'Digit2',
    100: 'Digit3',
    500: 'Digit4',
  }

  useEffect(() => {
    const numKeyUp = (e) => {
      if (e.code == digits[props.value] && options.deal === false && options.gameFinished === false) {
        addBet();
        console.log(e.code)
      }
    }

    document.addEventListener('keyup', numKeyUp);

    return () => document.removeEventListener('keyup', numKeyUp);
  })

  return (
    <div className={compClassName} onClick={addBet}>
      <svg className={svgClassName}>
        <use xlinkHref="#chip"></use>
      </svg>
    </div>
  );
}

export default Chip;