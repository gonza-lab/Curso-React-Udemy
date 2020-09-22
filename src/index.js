import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './Seccion 4 - CounterApp/CounterApp.js';
// import PrimeraApp from './Seccion 4 - CounterApp/PrimeraApp.js';

ReactDOM.render(<CounterApp value={5} />, document.getElementById('root'));
