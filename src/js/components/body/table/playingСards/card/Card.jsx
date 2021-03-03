import React from 'react';

const Card = (props) => {

  const cardItem = props.cardItem;
  const cardClassName = props.backside ? 'card back animate__animated animate__backInDown' : `card rank-${cardItem.name} ${cardItem.class} animate__animated animate__backInDown`;

  return (
    <li>
      <div className={cardClassName}>
        <span className="rank">{props.backside ? '' : cardItem.name}</span>
        <span className="suit">{props.backside ? '' : cardItem.suit}</span>
      </div>
    </li>
  );
}

export default Card;