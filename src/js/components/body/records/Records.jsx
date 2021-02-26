import React from 'react';

const Records = (props) => {
  return (
    <div class="records">
      <button class="btn btn_small btn_options-close"><img src="/assets/icon-arrow-left.svg" alt=""
        class="btn__icon-left" /></button>
      <p class="records__title">
        Records
    </p>
      <table class="records__table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Record</td>
            <td>Losing</td>
            <td>Date</td>
          </tr>
        </thead>
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
      </table>
      <p class="records__notice">
        No records at the moment...
    </p>
    </div>
  );
}

export default Records;