import React from 'react';
import { NavLink } from 'react-router-dom';

const Options = (props) => {
  return (
    <div class="options">
      <NavLink to="/" class="btn btn_small btn_options-close"><img src="/assets/icon-arrow-left.svg" alt=""
        class="btn__icon-left" /></NavLink>
      <p class="options__title">
        Options
    </p>
      <table class="options__table">
        <tr>
          <td class="options__item-name">Decks</td>
          <td class="options__decks">
            <button class="btn btn_small">1</button>
            <button class="btn btn_small btn_inactive">2</button>
          </td>
        </tr>
        <tr>
          <td class="options__item-name"><label for="hitsSoft17">Dealer hits on soft 17</label></td>
          <td><input type="checkbox" class="custom-checkbox" id="hitsSoft17" /></td>
        </tr>
        <tr>
          <td class="options__item-name"><label for="insurance">Insurance</label></td>
          <td><input type="checkbox" class="custom-checkbox" id="insurance" /></td>
        </tr>
        <tr>
          <td class="options__item-name"><label for="autoLastBet">Auto last bet</label></td>
          <td><input type="checkbox" class="custom-checkbox" id="autoLastBet" /></td>
        </tr>
      </table>
    </div>
  );
}

export default Options;