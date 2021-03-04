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

  save: function() {
    localStorage.setItem('blackJackRsOptions', JSON.stringify(this) );
    console.log('Options:', this);
    console.log('options saved! \n \n \n');
  }
  
}

export default options;