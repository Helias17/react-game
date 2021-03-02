const createDeck = () => {
  let deck = [];
  const suits = {
    1: '\u2666',
    2: '\u2660',
    3: '\u2663',
    4: '\u2665',
  }

  const classes = {
    1: 'diams',
    2: 'spades',
    3: 'clubs',
    4: 'hearts',
  }

  const figures = {
    1: 'j',
    2: 'q',
    3: 'k',
    4: 'a'
  }

  // create cards with digits
  for (let i = 2; i<=10; i++) {
    for (let j = 1; j<=4; j++) {
      const card = {
        name: i,
        suit: suits[j],
        value: i,
        class: classes[j],
      }
      deck.push(card);
    }
  }

  // create cards with figures
  for (let i = 1; i<=4; i++) {
    for (let j = 1; j<=4; j++) {
      const card = {
        name: figures[i],
        suit: suits[j],
        value: figures[i] === 'a' ? 1 : 10,
        class: classes[j],
      }
      deck.push(card);
    }
  }

  return deck;

}

export default createDeck;