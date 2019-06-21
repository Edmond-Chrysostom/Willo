import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'popper.js'

//import 'bootstrap/dist/js/bootstrap.min.js';
//import App from './App';
//import Header from './Header';
//import Body from './Body';
 import * as serviceWorker from './serviceWorker';
//import About from './About';
import Import from './Damazo/Import'
 ReactDOM.render(<div> <Import /></div>, document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
