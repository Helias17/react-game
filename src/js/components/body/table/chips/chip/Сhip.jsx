import React from 'react';
import options from '@js/options';

const Chip = (props) => {

  const compClassName = `chip chip_${props.value}`;
  const svgClassName = `chip__item chip__item_${props.value}`;

  return (
    <div className={compClassName} onClick={() => {
      if (options.deal) {
        // if player fixed his bet by clicking deal button, we don't let to make new bet
        return false;
      }
      props.makeBet(props.value);
    }}>
      <svg className={svgClassName}>
        <use xlinkHref="#chip"></use>
      </svg>
    </div>
  );
}

export default Chip;