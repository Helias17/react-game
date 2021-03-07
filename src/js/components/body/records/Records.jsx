import React from 'react';
import { NavLink } from 'react-router-dom';
import playSound from '@js/playSound';

const Records = (props) => {
  return (
    <div className="records">
      <NavLink to="/" className="btn btn_small btn_options-close animate__animated animate__bounceInRight" onClick={() => playSound('back')}><img src="/assets/icon-arrow-left.svg" alt=""
        className="btn__icon-left" /></NavLink>
      <p className="records__title">
        Records
    </p>
      <div className="records__table-box">
        <table className="records__table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Record</td>
              <td>Losing</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alexander</td>
              <td>3650</td>
              <td>3</td>
              <td>25.02.2021</td>
            </tr>
            <tr>
              <td>Margarita</td>
              <td>2900</td>
              <td>1</td>
              <td>21.01.2021</td>
            </tr>

          </tbody>
        </table>
      </div>

      <p className="records__notice">
        No records at the moment...
    </p>
    </div>
  );
}

export default Records;