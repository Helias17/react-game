const options = {
  deck: [],
  decksNum: 1,
  dealerHitsOnSoft17: false,
  insurance: false,
  autoLastBet: false,
  music: true,
  sounds: true,
  playerRecord: 0,
  playerBank: 2000,
  playerBet: 0,
  chipsOnBet: [],
  deal: false,
  stand: false,
  playerCards: [],
  dealerCards: [],
  gameFinished: true,
  audio: {
    click: 'https://blackjack777.ws/sounds/click.wav',
    back: 'https://blackjack777.ws/sounds/back.wav',
    chip: 'https://blackjack777.ws/sounds/chip.wav',
    card: 'https://blackjack777.ws/sounds/card.wav',
    track1: 'https://blackjack777.ws/sounds/track1.wav',
  },
  music: true,
  sounds: true,
  volume: 1,

  save: function() {
    localStorage.setItem('blackJackRsOptions', JSON.stringify(this) );
    console.log('Options:', this);
    console.log('options saved! \n \n \n');
  }
  
}

export default options;