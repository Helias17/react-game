import React from 'react';
import ReactDOM from 'react-dom';
import readOptionsFromLS from './js/readOptionsFromLS';
import App from './App';
import './styles/index.scss';
import 'animate.css';

//localStorage.clear();
readOptionsFromLS();


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
