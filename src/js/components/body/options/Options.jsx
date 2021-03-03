import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import options from '@js/options.js';

//create forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}


const Options = (props) => {
  const forceUpdate = useForceUpdate();   // call hook

  const deckClassName = 'btn btn_small';

  return (
    <div className="options">
      <NavLink to="/" className="btn btn_small btn_options-close animate__animated animate__bounceInRight"><img src="/assets/icon-arrow-left.svg" alt=""
        className="btn__icon-left" /></NavLink>
      <p className="options__title">
        Options
    </p>
      <table className="options__table">
        <tbody>
          <tr>
            <td className="options__item-name">Decks</td>
            <td className="options__decks">
              <button className={
                options.decksNum === 1 ? deckClassName : deckClassName + ' btn_inactive'
              } onClick={() => {
                options.decksNum = 1;
                options.save();
                forceUpdate();
              }}>1</button>
              <button className={
                options.decksNum === 2 ? deckClassName : deckClassName + ' btn_inactive'
              } onClick={() => {
                options.decksNum = 2;
                options.save();
                forceUpdate();
              }}>2</button>
            </td>
          </tr>
          <tr>
            <td className="options__item-name"><label htmlFor="hitsSoft17">Dealer hits on soft 17</label></td>
            <td>
              <input type="checkbox" checked={options.dealerHitsOnSoft17} className="custom-checkbox" id="hitsSoft17" onChange={() => {
                options.dealerHitsOnSoft17 = options.dealerHitsOnSoft17 ? false : true;
                options.save();
                forceUpdate();
              }} />
            </td>
          </tr>
          <tr>
            <td className="options__item-name"><label htmlFor="insurance">Insurance</label></td>
            <td>
              <input type="checkbox" checked={options.insurance} className="custom-checkbox" id="insurance" onChange={() => {
                options.insurance = options.insurance ? false : true;
                options.save();
                forceUpdate();
              }} />
            </td>
          </tr>
          <tr>
            <td className="options__item-name"><label htmlFor="autoLastBet">Auto last bet</label></td>
            <td>
              <input type="checkbox" checked={options.autoLastBet} className="custom-checkbox" id="autoLastBet" onChange={() => {
                options.autoLastBet = options.autoLastBet ? false : true;
                options.save();
                forceUpdate();
              }} />
            </td>
          </tr>
        </tbody>
      </table >
    </div >
  );
}

export default Options;