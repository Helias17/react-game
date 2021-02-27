const options = {
  decksNum: 2,
  playerRecord: null,
  dealerHitsOnSoft17: false,
  insurance: false,
  autoLastBet: false,
  playerRecord: null,

  save: function() {
    localStorage.setItem('blackJackRsOptions', JSON.stringify(this) );
    console.log('Options:', JSON.stringify(this));
    console.log('options saved! \n \n \n');
  }
  
}

export default options;