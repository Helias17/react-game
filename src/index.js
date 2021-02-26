import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import readOptionsFromLS from './js/readOptionsFromLS';

readOptionsFromLS();

ReactDOM.render(
    <App />,
  document.getElementById('app')
);
