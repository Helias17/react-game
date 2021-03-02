const options = {
  deck: null,
  decksNum: 1,
  dealerHitsOnSoft17: false,
  insurance: false,
  autoLastBet: false,
  music: true,
  sounds: true,
  playerRecord: 7500,
  playerBank: 2000,
  playerBet: 0,
  deal: false,
  playerCards: [],
  dealerCards: [],

  save: function() {
    localStorage.setItem('blackJackRsOptions', JSON.stringify(this) );
    console.log('Options:', JSON.stringify(this));
    console.log('options saved! \n \n \n');
  }
  
}

export default options;