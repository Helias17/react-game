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

/* 
setTimeout(() => alert('Уважаемый проверяющий, дедлайн по проверке этого задания 10 марта. Если возможно, прошу начать проверку не ранее 8 марта. Не успел допилить некоторые фичи. Спасибо!'), 100)
 */