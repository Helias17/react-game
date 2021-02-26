/* 
Function check if user has saved options in localStorage
if has, then use these options for game
 */
import options from './options';

const readOptionsFromLS = () => {
  const optionsLS = JSON.parse(localStorage.getItem('blackJackRsOptions'));

  if ( optionsLS !== null && typeof optionsLS === 'object' && optionsLS.hasOwnProperty('playerRecord')) {
    // const optionsLSArr = optionsLS.entries();
    // save data from optionsLS to options

  }
}

export default readOptionsFromLS;