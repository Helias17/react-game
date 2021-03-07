/* 
Function check if user has saved options in localStorage
if has, then use these options for game
 */
import options from './options';

const readOptionsFromLS = () => {
  const optionsLS = localStorage.getItem('blackJackRsOptions') ? JSON.parse(localStorage.getItem('blackJackRsOptions')) : null;

  if ( optionsLS !== null && typeof optionsLS === 'object' && optionsLS.hasOwnProperty('playerRecord')) {
    Object.entries(optionsLS).forEach((item) => {options[item[0]] = item[1]; });
  }
}

export default readOptionsFromLS;